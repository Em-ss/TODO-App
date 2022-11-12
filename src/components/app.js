import React, { useState } from 'react';

import { NewTaskForm } from './new-task-form';
import { Footer } from './footer';
import { TaskList } from './task-list';

export const App = () => {
  let maxId = 100;

  const [todoData, setTodoData] = useState([]);
  const [filter, setFilter] = useState('all');

  const onItemAdded = (label, dateStart) => {
    setTodoData((todoData) => {
      const item = createTodoItem(label, dateStart);

      return [...todoData, item];
    });
  };

  const createTodoItem = (label, dateStart) => {
    return {
      label,
      dateStart,
      completed: false,
      id: maxId++,
      date: new Date(),
    };
  };

  const toggleProperty = (arr, id, propName) => {
    const idx = arr.findIndex((el) => el.id === id);

    const oldItem = arr[idx];
    const newItem = { ...oldItem, [propName]: !oldItem[propName] };

    return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
  };
  const onFilterChange = (filter) => {
    setFilter({ filter });
  };

  const onToggleDone = (id) => {
    setTodoData((todoData) => {
      return toggleProperty(todoData, id, 'completed');
    });
  };

  const deleteItem = (id) => {
    todoData((todoData) => {
      const idx = todoData.findIndex((el) => el.id === id);

      const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];

      return newArray;
    });
  };
  const deleteAll = () => {
    todoData((todoData) => {
      const idx = todoData.filter((el) => !el.completed);
      return idx;
    });
  };

  const filterItems = (todoData, filter) => {
    if (filter === 'all') {
      return todoData;
    } else if (filter === 'active') {
      return todoData.filter((item) => !item.completed);
    } else if (filter === 'done') {
      return todoData.filter((item) => item.completed);
    }
  };

  // changeTime() {
  //   setInterval(() => {
  //     this.setState({});
  //   }, 1000)
  // }

  const filterF = filterItems(todoData, filter);
  const value = todoData.filter((elem) => elem.completed).length;
  // console.log(dateStart);
  return (
    <div>
      <NewTaskForm onItemAdded={onItemAdded} />
      <section className="main">
        <TaskList todos={filterF} onDeleted={deleteItem} onToggleDone={onToggleDone} />

        <Footer filter={filter} onFilterChange={onFilterChange} deleteAll={deleteAll} value={value} />
      </section>
    </div>
  );
};
