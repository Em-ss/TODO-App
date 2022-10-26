import React from 'react';
import PropTypes from 'prop-types';

import { Task } from './task';

export const TaskList = ({ todos, onDeleted, onToggleDone, filter }) => {
  const elements = todos.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <Task
        key={id}
        {...itemProps}
        onDeleted={() => onDeleted(id)}
        onToggleDone={() => onToggleDone(id)}
        filter={filter}
      />
    );
  });
  return <ul className="todo-list">{elements}</ul>;
};

TaskList.defaultProps = {
  todos: [],
};

TaskList.propTypes = {
  todos: PropTypes.array,
};
