import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class NewTaskForm extends Component {
  constructor() {
    super();
    this.propTypes = {
      onItemAdded: PropTypes.func,
    };
  }

  onLabelChange(e) {
    this.setState({
      label: e.target.value,
    });
  }
  onKeyDown(e) {
    if (e.keyCode === 13) {
      this.props.onItemAdded(this.state.label);

      e.target.value = '';
    }
  }

  //

  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          onChange={this.onLabelChange.bind(this)}
          onKeyDown={this.onKeyDown.bind(this)}
        />
      </header>
    );
  }
}
