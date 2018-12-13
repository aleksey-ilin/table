import React from 'react';
import './Task.css';
import PropTypes from 'prop-types';
import { round } from 'lodash';

export default class Tasks extends React.Component {
  handleClickEnter = (e) => {
    const enterCode = 13;
    if (e.keyCode === enterCode) {
      e.target.blur();
    }
  }

  editTaskText = id => (e) => {
    const { updateTaskText } = this.props;
    updateTaskText({ id, text: e.target.value });
    this.handleClickEnter(e);
  }

  editPlan = id => (e) => {
    const { updatePlan } = this.props;
    updatePlan({ id, plan: e.target.value });
    this.handleClickEnter(e);
  }

  editFact = id => (e) => {
    const { updateFact } = this.props;
    updateFact({ id, fact: e.target.value });
    this.handleClickEnter(e);
  }

  editPercent = id => (e) => {
    const { updatePercent } = this.props;
    updatePercent({ id, percent: e.target.value });
    this.handleClickEnter(e);
  }

  removeTask = id => () => this.props.removeTask({ id });

  render() {
    const { task } = this.props;
    const { plan, fact, percent } = task;
    const cond = (plan === 0 || fact === 0 || percent === 0 || plan === '' || fact === '' || percent === '');
    const necessary = cond ? null : round(((100 * fact / percent) - fact), 1);
    return (
      <div className="item">
        <div className="numTask">
          <button className="newTask" onClick={this.removeTask(task.id)}>-</button>
          <div className="num">{task.id}</div>
        </div>
        <input className="task" placeholder="New task" onKeyUp={this.editTaskText(task.id)}></input>
        <input className="plan" placeholder="0" type="number" onKeyUp={this.editPlan(task.id)}></input>
        <input className="fact" placeholder="0" type="number" onKeyUp={this.editFact(task.id)}></input>
        <input className="percent" placeholder="0" type="number" onKeyUp={this.editPercent(task.id)}></input>
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
