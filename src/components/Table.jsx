import React from 'react';
import './Table.css';
import Tasks from '../containers/Tasks';

  export default class Table extends React.Component {
  addTask = (e) => {
    e.preventDefault();
    const { newTaskText, addTask } = this.props;
    addTask({ text: newTaskText });
  }

  render() {
    console.log(this.props);
    return (
      <div className="table">
        <div className="thead">
          <div className="numTask">
            <button className="newTask" onClick={this.addTask}>+</button>
            <div className="num">№</div>
          </div>
          <div className="task">Task</div>
          <div className="plan">Plan</div>
          <div className="fact">Fact</div>
          <div className="percent">%</div>
          <div className="forecast">Forecast</div>
        </div>
        <Tasks />
      </div>
    );
  }
}
