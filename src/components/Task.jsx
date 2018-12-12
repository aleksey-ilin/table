import React from 'react';
import './Task.css';
import PropTypes from 'prop-types';
import cn from 'classnames';

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

  removeTask = id => () => {
    this.props.removeTask({ id });
  }

  render() {
    const { task } = this.props;
    const cellClass = cn({
      task: true,
    });
    return (
      <div className="item">
        <div className="numTask">
          <button className="newTask" onClick={this.removeTask(task.id)}>-</button>
          <div className="num">{task.id}</div>
        </div>
        <input className={cellClass} placeholder="New task" onKeyUp={this.editTaskText(task.id)}></input>
        <div className="plan">10</div>
        <div className="fact">10</div>
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
};
