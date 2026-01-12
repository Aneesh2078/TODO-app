import React from 'react';
import TodoItem from './TodoItem';
import noTasksImg from '../assets/no-tasks.svg';

const TodoList = ({ todos, onToggle, onDelete, onEdit }) => {
    if (todos.length === 0) {
        return (
            <div className="card" style={{ textAlign: 'center', color: 'var(--secondary-text)', padding: '3rem 1.5rem' }}>
                <img src={noTasksImg} alt="No tasks" style={{ width: '150px', marginBottom: '1.5rem', opacity: 0.8 }} />
                <p>No tasks found. Add a new task to get started!</p>
            </div>
        );
    }

    return (
        <ul className="todo-list">
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onToggle={onToggle}
                    onDelete={onDelete}
                    onEdit={onEdit}
                />
            ))}
        </ul>
    );
};

export default TodoList;
