import React, { useEffect } from 'react';
import { X } from 'lucide-react';

const Toast = ({ message, type = 'info', onClose }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 3000);

        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div className="toast">
            <span>{message}</span>
            <button className="btn-icon" onClick={onClose}>
                <X size={16} />
            </button>
        </div>
    );
};

export default Toast;
