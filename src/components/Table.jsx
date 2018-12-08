import React from 'react';
import './Table.css';
import Item from './Item';

export default class Table extends React.Component {
  state = { tasks: [] };

  addTask = () => {
    const { tasks } = this.state;
    // console.log(tasks);
    tasks.length === 0 ? this.setState({ tasks: [1] }) : this.setState({ tasks: [...tasks, tasks.length + 1] });
    // console.log(tasks);
  };

  render() {
    const { tasks } = this.state;
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
        {tasks.map(task => <Item>{task}</Item>)}
      </div>
    );
  }
}
