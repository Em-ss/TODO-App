import React, { Component } from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow'


// import './todo-list-item.css'
export default class Task extends Component {


  state = {
    result:''
  }

  componentDidMount() {
     setInterval(
      () => {
        this.setState({
          result: formatDistanceToNow(
            this.props.date,
            {includeSeconds: true}
          )
        });
      },
      5000
    );
  }

    render() {
      const {label,onDeleted,completed,onToggleDone,date} = this.props;
     
      // setInterval(function() {
      //    console.log('s')
      // },100 );

   let classNames = '';
   if (completed) {
    classNames += 'completed'
   }
   
      return (
        <li className={classNames}>
        <div className='view'>
          <input className='toggle' type="checkbox" />
            <label>
              <span className='description' onClick={onToggleDone} >{label}</span>
              <span className='created' > {this.state.result} </span>
            </label>
            <button className='icon icon-edit'></button>
            <button className='icon icon-destroy' onClick={onDeleted}></button>
        </div>
      </li>
      );
    }

};

