import React, { useState } from 'react';
import { Plus } from 'lucide-react';

const TodoInput = ({ onAdd }) => {
    const [text, setText] = useState('');
    const [priority, setPriority] = useState('Medium');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text.trim()) return;

        onAdd({ text: text.trim(), priority });
        setText('');
        setPriority('Medium');
    };

    return (
        <form className="card" onSubmit={handleSubmit}>
            <div className="input-group">
                <input
                    type="text"
                    className="input-field"
                    placeholder="Add a new task..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <select
                    className="input-field priority-select"
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                >
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select>
                <button type="submit" className="btn btn-primary">
                    <Plus size={20} />
                    <span>Add</span>
                </button>
            </div>
        </form>
    );
};

export default TodoInput;
