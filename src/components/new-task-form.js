import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class NewTaskForm extends Component {
  constructor() {
    super();
    this.propTypes = {
      onItemAdded: PropTypes.func,
    };
    this.state = {
      label: 'Task',
      minutes: 1,
      seconds: 1,
      date: new Date(),
    };
    // this.frt = new Date(`1995-12-17T03:${this.state.minutes}:${this.state.seconds}`);
    // this.frt = new Date('1995-12-17T03:22:22');
  }
  //
  onLabelChangeText(e) {
    this.setState({
      label: e.target.value,
    });
  }
  onLabelChangeMin(e) {
    this.setState({
      minutes: e.target.value,
      // minutes: Number(e.target.value),
    });
  }
  onLabelChangeSec(e) {
    this.setState({
      seconds: e.target.value,
    });
  }

  onKeyDown(e) {
    const frt = new Date(0, 0, 0, 0, this.state.minutes, this.state.seconds);
    const frt1 = new Date(0, 0, 0, 0, 1, 1);
    console.log(frt1);
    // console.log(this.state.date);

    if (e.keyCode === 13) {
      this.props.onItemAdded(this.state.label, frt);

      e.target.value = '';
    }
  }

  //

  render() {
    // console.log(this.props.dateStart);
    return (
      <header className="header">
        <h1>todos</h1>
        <form className="new-todo-form">
          <input
            className="new-todo"
            placeholder="Task"
            autoFocus
            onChange={this.onLabelChangeText.bind(this)}
            onKeyDown={this.onKeyDown.bind(this)}
          />
          <input
            className="new-todo-form__timer"
            placeholder="Min"
            autoFocus=""
            onChange={this.onLabelChangeMin.bind(this)}
          />
          <input
            className="new-todo-form__timer"
            placeholder="Sec"
            autoFocus=""
            onChange={this.onLabelChangeSec.bind(this)}
          />
        </form>
      </header>
    );
  }
}
