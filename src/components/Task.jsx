import React from 'react';
import './Task.css';
import PropTypes from 'prop-types';

export default class Tasks extends React.Component {
  editTaskText = id => (e) => {
    // console.log(e.target.value);
    const { updateTaskText } = this.props;
    updateTaskText({ id, text: e.target.value });
    const enterCode = 13;
    if (e.keyCode === enterCode) {
      e.target.blur();
    }
  }

  editPlan = id => (e) => {
    const { updatePlan } = this.props;
    updatePlan({ id, plan: e.target.value });
    const enterCode = 13;
    if (e.keyCode === enterCode) {
      e.target.blur();
    }
  }

  editFact = id => (e) => {
    const { updateFact } = this.props;
    updateFact({ id, fact: e.target.value });
    const enterCode = 13;
    if (e.keyCode === enterCode) {
      e.target.blur();
    }
  }

  removeTask = id => () => {
    this.props.removeTask({ id });
  }

  render() {
    const { task } = this.props;
    return (
      <div className="item">
        <div className="numTask">
          <button className="newTask" onClick={this.removeTask(task.id)}>-</button>
          <div className="num">{task.id}</div>
        </div>
        <input className="task" placeholder="New task" onKeyUp={this.editTaskText(task.id)}></input>
        <input className="plan" placeholder="0" onKeyUp={this.editPlan(task.id)}></input>
        <input className="fact" placeholder="0" onKeyUp={this.editFact(task.id)}></input>
        <div className="percent">100 %</div>
        <div className="forecast">0</div>
      </div>
    );
  }
}

Tasks.propTypes = {
  task: PropTypes.object,
  removeTask: PropTypes.func,
  updateTaskText: PropTypes.func,
  updatePlan: PropTypes.func,
  updateFact: PropTypes.func,
};
