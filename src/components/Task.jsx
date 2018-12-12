import React from 'react';
import './Task.css';
import PropTypes from 'prop-types';
import { round } from 'lodash';

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

  editPercent = id => (e) => {
    const { updatePercent } = this.props;
    updatePercent({ id, percent: e.target.value });
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
    const { plan, fact, percent } = task;
    const cond = plan === 0 || fact === 0 || percent === 0;
    console.log(plan);
    const necessary = cond ? null : round(plan - 100 * fact / percent, 1);
    console.log(task);
    return (
      <div className="item">
        <div className="numTask">
          <button className="newTask" onClick={this.removeTask(task.id)}>-</button>
          <div className="num">{task.id}</div>
        </div>
        <input className="task" placeholder="New task" onKeyUp={this.editTaskText(task.id)}></input>
        <input className="plan" placeholder="0" onKeyUp={this.editPlan(task.id)}></input>
        <input className="fact" placeholder="0" onKeyUp={this.editFact(task.id)}></input>
        <input className="percent" placeholder="0" onKeyUp={this.editPercent(task.id)}></input>
        <div className="necessary">{ necessary }</div>
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
  updatePercent: PropTypes.func,
};
