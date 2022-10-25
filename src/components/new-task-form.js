import React, { Component } from 'react';
import PropTypes from 'prop-types'

export default class NewTaskForm extends Component {

  onLabelChange = (e) => {
  this.setState({
    label: e.target.value
  })
  }
 onKeyDown = (e) => {
  if(e.keyCode === 13){
    this.props.onItemAdded(this.state.label);
  
    e.target.value = '';
  }
 }

 static propTypes = {
  onItemAdded:PropTypes.func
}


render() {
  return (
    <header className="header" >
      <h1>todos</h1>
    <input className="new-todo" placeholder="What needs to be done?" autoFocus 
    onChange={this.onLabelChange} 
    onKeyDown = {this.onKeyDown}
    
    />
   
  </header>
  )
  }
   
  };
 
  
 