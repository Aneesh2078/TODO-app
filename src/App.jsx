import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import FilterBar from './components/FilterBar';
import SearchBar from './components/SearchBar';
import Toast from './components/Toast';
import logo from './assets/logo.svg';
import './style.css';

function App() {
  // ... state declarations ...


  // Initialize state from local storage or defaults
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem('todos');
    return saved ? JSON.parse(saved) : [];
  });

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  const [filter, setFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [toasts, setToasts] = useState([]);

  // Persist todos
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // Persist and apply theme
  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Toast helper
  const addToast = (message) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message }]);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // Todo Handlers
  const handleAddTodo = ({ text, priority }) => {
    const newTodo = {
      id: Date.now(),
      text,
      priority,
      completed: false,
    };
    setTodos((prev) => [newTodo, ...prev]);
    addToast('Task added successfully');
  };

  const handleToggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
    // Optional: addToast when task completed? User asked for notification on completed.
    // Check if it's becoming completed
    const todo = todos.find(t => t.id === id);
    if (todo && !todo.completed) {
      addToast('Task completed');
    }
  };

  const handleDeleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
    addToast('Task deleted');
  };

  const handleEditTodo = (id, newText) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  // Derived state
  const filteredTodos = todos
    .filter((todo) => {
      if (filter === 'Completed') return todo.completed;
      if (filter === 'Pending') return !todo.completed;
      return true;
    })
    .filter((todo) =>
      todo.text.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const completedCount = todos.filter((t) => t.completed).length;
  const totalCount = todos.length;

  return (
    <div className="app-container">
      <header className="header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <img src={logo} alt="Task Master Logo" style={{ width: '40px', height: '40px' }} />
          <h1>Task Master</h1>
        </div>
        <button
          className="theme-toggle"
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          aria-label="Toggle theme"
        >
          {theme === 'light' ? <Moon size={24} /> : <Sun size={24} />}
        </button>
      </header>

      <div className="controls">
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <FilterBar filter={filter} setFilter={setFilter} />
      </div>

      <div className="stats">
        <span>{completedCount} / {totalCount} Completed</span>
      </div>

      <TodoInput onAdd={handleAddTodo} />

      <TodoList
        todos={filteredTodos}
        onToggle={handleToggleTodo}
        onDelete={handleDeleteTodo}
        onEdit={handleEditTodo}
      />

      <div className="toast-container">
        {toasts.map((t) => (
          <Toast
            key={t.id}
            message={t.message}
            onClose={() => removeToast(t.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
