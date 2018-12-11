import React from 'react';
import './Table.css';
import PropTypes from 'prop-types';
import Task from '../containers/Tasks';

export default class Table extends React.Component {
  addTask = (e) => {
    e.preventDefault();
    const { newTaskText, addTask } = this.props;
    addTask({ text: newTaskText });
  }

  render() {
    // console.log(this.props.tasks);
    const { tasks } = this.props;
    return (
      <div className="table">
        <div className="thead">
          <div className="numTask">
            <button className="newTask" onClick={this.addTask}>+</button>
            <div className="num">№</div>
          </div>
          <div className="task">Tasks</div>
          <div className="plan">Plan</div>
          <div className="fact">Fact</div>
          <div className="percent">%</div>
          <div className="forecast">Forecast</div>
        </div>
        {tasks.length === 0 ? null : tasks.map(task => <Task task={task} key={task.id}/>)}
      </div>
    );
  }
}

Table.propTypes = {
  newTaskText: PropTypes.string,
  addTask: PropTypes.func,
  tasks: PropTypes.array,
};
