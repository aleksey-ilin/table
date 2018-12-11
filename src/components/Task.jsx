/* global document:true */
/* eslint no-undef: "error" */
import React from 'react';
import './Task.css';
import PropTypes from 'prop-types';
import cn from 'classnames';

export default class Tasks extends React.Component {
  state = { editing_state: false };

  removeTask = id => () => {
    this.props.removeTask({ id });
  }

  changeStateCell = () => {
    this.setState({ editing_state: true });
  }

  editTask = (e) => {
    // console.log(e.keyCode);
    if (e.keyCode === 13) {
      this.setState({ editing_state: false });
      e.target.blur();
    }
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside, false);
  }

  componentDidMount() {
    document.addEventListener('click', this.handleClickOutside, false);
  }

  handleClickOutside = ({ target: { className } }) => {
    if (className !== 'task cell-editing') {
      this.setState({ editing_state: false });
    }
  }

  render() {
    const { task } = this.props;
    const cellClass = cn({
      task: true,
      'cell-editing': this.state.editing_state,
    });
    return (
      <div className="item">
        <div className="numTask">
          <button className="newTask" onClick={this.removeTask(task.id)}>-</button>
          <div className="num">{task.id}</div>
        </div>
        <div className={cellClass} contentEditable={this.state.editing_state} data-text="New task" onKeyDown={this.editTask} onClick={this.changeStateCell}></div>
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
};
