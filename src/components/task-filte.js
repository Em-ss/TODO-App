import React from 'react';

const filterButtons = [
  { name: 'all', label: 'All' },
  { name: 'active', label: 'Active' },
  { name: 'done', label: 'Completed' },
];

const TasksFilter = ({ filter, onFilterChange }) => {
  const buttons = filterButtons.map(({ name, label }) => {
    const isActive = name === filter;
    const classNames = isActive ? 'selected' : 'btn';

    return (
      <li key={name}>
        <button type="button" onClick={() => onFilterChange(name)} className={classNames}>
          {label}
        </button>
      </li>
    );
  });

  return <ul className="filters">{buttons}</ul>;
};

TasksFilter.defaultProps = {
  filter: 'all',
};

export default TasksFilter;
