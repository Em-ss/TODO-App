import React, { useState } from 'react';

export const NewTaskForm = ({ onItemAdded }) => {
  const [label, setLabel] = useState('Task');
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(1);

  const onLabelChangeText = (e) => {
    setLabel(e.target.value);
  };
  const onLabelChangeMin = (e) => {
    setMinutes(e.target.value);
  };
  const onLabelChangeSec = (e) => {
    setSeconds(e.target.value);
  };

  const onKeyDown = (e) => {
    const frt = new Date(0, 0, 0, 0, minutes, seconds);

    if (e.keyCode === 13) {
      onItemAdded(label, frt);

      e.target.value = '';
    }
  };

  return (
    <header className="header">
      <h1>todos</h1>
      <form className="new-todo-form">
        <input className="new-todo" placeholder="Task" autoFocus onChange={onLabelChangeText} onKeyDown={onKeyDown} />
        <input className="new-todo-form__timer" placeholder="Min" autoFocus="" onChange={onLabelChangeMin} />
        <input className="new-todo-form__timer" placeholder="Sec" autoFocus="" onChange={onLabelChangeSec} />
      </form>
    </header>
  );
};
