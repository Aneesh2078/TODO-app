import React, { useState, useRef, useEffect } from 'react';
import { Trash2, Check, Edit2, X, Save } from 'lucide-react';

const TodoItem = ({ todo, onToggle, onDelete, onEdit }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(todo.text);
    const inputRef = useRef(null);

    useEffect(() => {
        if (isEditing && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isEditing]);

    const handleSave = () => {
        if (editText.trim()) {
            onEdit(todo.id, editText.trim());
            setIsEditing(false);
        }
    };

    const handleCancel = () => {
        setEditText(todo.text);
        setIsEditing(false);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSave();
        } else if (e.key === 'Escape') {
            handleCancel();
        }
    };

    return (
        <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            {isEditing ? (
                <div className="todo-content" style={{ width: '100%' }}>
                    <input
                        ref={inputRef}
                        type="text"
                        className="input-field"
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                        onKeyDown={handleKeyDown}
                        style={{ marginRight: '0.5rem' }}
                    />
                    <div style={{ display: 'flex', gap: '0.25rem' }}>
                        <button className="btn-icon" onClick={handleSave} aria-label="Save">
                            <Save size={18} />
                        </button>
                        <button className="btn-icon" onClick={handleCancel} aria-label="Cancel">
                            <X size={18} />
                        </button>
                    </div>
                </div>
            ) : (
                <>
                    <div className="todo-content">
                        <div
                            className={`checkbox ${todo.completed ? 'checked' : ''}`}
                            onClick={() => onToggle(todo.id)}
                        >
                            <Check className="checkbox-icon" />
                        </div>
                        <span className="todo-text">{todo.text}</span>
                        <span className={`badge badge-${todo.priority.toLowerCase()}`}>
                            {todo.priority}
                        </span>
                    </div>
                    <div style={{ display: 'flex', gap: '0.25rem' }}>
                        <button
                            className="btn-icon"
                            onClick={() => setIsEditing(true)}
                            aria-label="Edit task"
                            disabled={todo.completed}
                        >
                            <Edit2 size={18} />
                        </button>
                        <button
                            className="btn-icon delete"
                            onClick={() => onDelete(todo.id)}
                            aria-label="Delete task"
                        >
                            <Trash2 size={18} />
                        </button>
                    </div>
                </>
            )}
        </li>
    );
};

export default TodoItem;
