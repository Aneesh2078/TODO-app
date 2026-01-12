import React from 'react';

const FilterBar = ({ filter, setFilter }) => {
    const filters = ['All', 'Completed', 'Pending'];

    return (
        <div className="filter-bar">
            {filters.map((f) => (
                <button
                    key={f}
                    className={`filter-btn ${filter === f ? 'active' : ''}`}
                    onClick={() => setFilter(f)}
                >
                    {f}
                </button>
            ))}
        </div>
    );
};

export default FilterBar;
