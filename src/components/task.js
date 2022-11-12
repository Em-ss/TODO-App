import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import React, { useEffect, useState } from 'react';

export const Task = ({ label, onDeleted, completed, onToggleDone, dateStart, date }) => {
  const [result, setResult] = useState('less than 1 seconds');
  const [stop, setStop] = useState('');
  const [time, setTime] = useState(dateStart);
  const [chek, setChek] = useState(true);

  let classNames = '';
  if (completed) {
    classNames += 'completed';
  }

  const timer = time.getMinutes();
  const timer1 = time.getSeconds();

  const startTimer = () => {
    setChek(false);
  };

  const deletedTimer = () => {
    clearInterval(stop);
    setStop(undefined);
    setChek(true);
  };

  useEffect(() => {
    if (!chek) {
      const startInterval = setInterval(() => {
        setTime(new Date(time - new Date(2013, 2, 1, 1, 0, 1)));
      }, 1000);
      setStop(startInterval);
    }

    setInterval(() => {
      setResult(formatDistanceToNow(date, { includeSeconds: true }));
    }, 5000);
    return clearInterval(stop);
  }, [chek, time]);

  return (
    <li className={classNames}>
      <div className="view">
        <input className="toggle" type="checkbox" />
        <label>
          <span className="title" onClick={onToggleDone}>
            {label}
          </span>
          <span className="description">
            <button className="icon icon-play" onClick={stop ? null : startTimer}></button>
            <button className="icon icon-pause" onClick={deletedTimer}></button>
            {time.getMinutes() == 0 && time.getSeconds() == 0 ? deletedTimer : ' ' + ' ' + timer + ':' + timer1}
          </span>
          <span className="description"> {result} </span>
        </label>
        <button className="icon icon-edit"></button>
        <button className="icon icon-destroy" onClick={onDeleted}></button>
      </div>
    </li>
  );
};
