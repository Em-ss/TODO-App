import React, { Component } from 'react';

// import './app.css';

import NewTaskForm from './new-task-form';
import Footer from './footer';
import TasksFilter from "./task-filte";
import TaskList  from './task-list';



export default class App extends Component {

  maxId = 100;

  state = {
    todoData: [
      this.createTodoItem('Drink Coffee'),
      this.createTodoItem('Make Awesome App'),
      this.createTodoItem('Have a lunch')
    ],
    filter:'all'
      
    
  };
  
  onItemAdded = (label) => {
    this.setState((state) => {
      const item = this.createTodoItem(label);
     
      return { todoData: [...state.todoData, item] };
    })
  };

  createTodoItem(label) {
    return {
      label,
      completed: false,
      id: this.maxId++,
      date:new Date()
    }
  }

    toggleProperty(arr, id, propName) {
      const idx = arr.findIndex((el) => el.id === id);
  
      const oldItem = arr[idx];
      const newItem = {...oldItem,
        [propName]: !oldItem[propName]};
  
      return [
        ...arr.slice(0, idx),
        newItem,
        ...arr.slice(idx + 1)
      ];
    }
    onFilterChange = (filter) => {
     
      this.setState({ filter });
    };

    onToggleDone = (id) => {
      this.setState(({ todoData }) => {
        return {
          todoData: this.toggleProperty(todoData, id, 'completed')
        };
      });
    };

    deleteItem = (id) => {
        this.setState(({ todoData }) => {
          const idx = todoData.findIndex((el) => el.id === id);
    
          const newArray = [
            ...todoData.slice(0, idx),
            ...todoData.slice(idx + 1)
          ];
    
          return {
            todoData: newArray
          };
        });
      };
      deleteAll = () => {
        this.setState(({ todoData }) => {
          const idx = todoData.filter((el) => !el.completed);
    
        
          return {
            todoData: idx
          };
        });
      };
 
      
       
     
    
       
       filterItems(todoData, filter) {
        if (filter === 'all') {
          return todoData;
        } else if (filter === 'active') {
          return todoData.filter((item) => (!item.completed));
        } else if (filter === 'done') {
          return todoData.filter((item) => item.completed);
        }
      }
    

    
    render() {
      const { todoData, filter } = this.state;
      const filterF = this.filterItems(todoData, filter);
      const value = todoData.filter((elem) => elem.completed).length;

      return  (
            <div>
              <NewTaskForm onItemAdded = {this.onItemAdded}/>
              <section className="main">
              <TaskList todos = {filterF}
              onDeleted={ this.deleteItem }
              onToggleDone={this.onToggleDone}
              
              /> 
              <Footer 
              filter = {filter}
              onFilterChange = {this.onFilterChange}
              deleteAll = {this.deleteAll}
              value = {value}
             />

              </section>
            </div>
          )
    }
};