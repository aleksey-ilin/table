import React from 'react';
import './Tasks.css';

export default class Tasks extends React.Component {
  removeTask = id => () => {
    this.props.removeTask({ id });
  }
  
  render() {
    console.log(this.props);
    const { tasks } = this.props;
    if (tasks.length === 0) {
      return null;
    }
    return (
      tasks.map(task => (
        <div className="item" key={task.id}>
          <div className="numTask">
            <button className="newTask" onClick={this.removeTask(task.id)}>-</button>
            <div className="num">{ task.id }</div>
          </div>
          <div className="task">Task { /*children*/ }</div>
          <div className="plan">10</div>
          <div className="fact">10</div>
          <div className="percent">100 %</div>
          <div className="forecast">0</div>
        </div>
      ))
    );
  }
};
