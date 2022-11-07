import React, { Component } from 'react';

import { NewTaskForm } from './new-task-form';
import { Footer } from './footer';
import { TaskList } from './task-list';

export class App extends Component {
  constructor() {
    super();
    this.maxId = 100;
    this.state = {
      todoData: [
        // this.createTodoItem('Drink Coffee'),
        // this.createTodoItem('Make Awesome App'),
        // this.createTodoItem('Have a lunch'),
      ],
      filter: 'all',
    };
  }
  onItemAdded(label, dateStart) {
    this.setState((state) => {
      const item = this.createTodoItem(label, dateStart);

      return { todoData: [...state.todoData, item] };
    });
  }

  createTodoItem(label, dateStart) {
    return {
      label,
      dateStart,
      completed: false,
      id: this.maxId++,
      date: new Date(),
    };
  }

  toggleProperty(arr, id, propName) {
    const idx = arr.findIndex((el) => el.id === id);

    const oldItem = arr[idx];
    const newItem = { ...oldItem, [propName]: !oldItem[propName] };

    return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
  }
  onFilterChange(filter) {
    this.setState({ filter });
  }

  onToggleDone(id) {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'completed'),
      };
    });
  }

  deleteItem(id) {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);

      const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];

      return {
        todoData: newArray,
      };
    });
  }
  deleteAll() {
    this.setState(({ todoData }) => {
      const idx = todoData.filter((el) => !el.completed);

      return {
        todoData: idx,
      };
    });
  }

  filterItems(todoData, filter) {
    if (filter === 'all') {
      return todoData;
    } else if (filter === 'active') {
      return todoData.filter((item) => !item.completed);
    } else if (filter === 'done') {
      return todoData.filter((item) => item.completed);
    }
  }

  // changeTime() {
  //   setInterval(() => {
  //     this.setState({});
  //   }, 1000)
  // }

  render() {
    const { todoData, filter } = this.state;
    const filterF = this.filterItems(todoData, filter);
    const value = todoData.filter((elem) => elem.completed).length;
    // console.log(dateStart);
    return (
      <div>
        <NewTaskForm onItemAdded={this.onItemAdded.bind(this)} />
        <section className="main">
          <TaskList
            todos={filterF}
            onDeleted={this.deleteItem.bind(this)}
            onToggleDone={this.onToggleDone.bind(this)}
          />

          <Footer
            filter={filter}
            onFilterChange={this.onFilterChange.bind(this)}
            deleteAll={this.deleteAll.bind(this)}
            value={value}
          />
        </section>
      </div>
    );
  }
}
