import React, { Component } from 'react';

export class Task extends Component {
  constructor() {
    super();
    this.state = {
      result: 'less than 1 seconds',
      stop: '',
      time: new Date('1995-12-17T03:00:00'),
    };
    // this.time = this.props.dateStart;
  }

  startTimer() {
    const startInterval = setInterval(() => {
      console.log('asd');
      this.setState({
        time: new Date(this.state.time - new Date(2013, 2, 1, 1, 0, 1)),
      });
    }, 1000);
    this.setState({
      stop: startInterval,
    });
  }

  deletedTimer() {
    clearInterval(this.state.stop);
    this.setState({
      stop: undefined,
    });
  }

  componentDidMount() {
    this.setState({
      time: this.props.dateStart,
    });
    setInterval(() => {}, 5000);
  }

  render() {
    const { label, onDeleted, completed, onToggleDone } = this.props;

    let classNames = '';
    if (completed) {
      classNames += 'completed';
    }
    // console.log(this.props.dateStart);
    const timer = this.state.time.getMinutes();
    const timer1 = this.state.time.getSeconds();

    return (
      <li className={classNames}>
        <div className="view">
          <input className="toggle" type="checkbox" />
          <label>
            <span className="title" onClick={onToggleDone}>
              {label}
            </span>
            <span className="description">
              <button
                className="icon icon-play"
                onClick={this.state.stop ? null : this.startTimer.bind(this)}
                // onChange={this.onLabelChange.bind(this)}
              ></button>
              <button
                className="icon icon-pause"
                onClick={this.deletedTimer.bind(this)}
                // onChange={this.onLabelChange.bind(this)}
              ></button>
              {this.state.time.getMinutes() == 0 && this.state.time.getSeconds() == 0
                ? this.deletedTimer.bind(this)()
                : ' ' + ' ' + timer + ':' + timer1}
            </span>
            <span className="description"> {this.state.result} </span>
          </label>
          <button className="icon icon-edit"></button>
          <button className="icon icon-destroy" onClick={onDeleted}></button>
        </div>
      </li>
    );
  }
}
