import React from 'react';
import './Task.css';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';
import Timer from 'easytimer.js';
import { getNecessary } from '../utils';

export default class Tasks extends React.Component {
  state = { timerButton: 'stop', showModal: false, timer: new Timer() };

  editCell = (fn, property, id) => (e) => {
    fn({ id, [property]: e.target.value });
    const enterCode = 13;
    if (e.keyCode === enterCode) {
      e.target.blur();
    }
  }

  removeTask = id => () => {
    const { updateRunnigTask, removeTask } = this.props;
    this.state.timer.stop();
    updateRunnigTask({ id: '-1' });
    removeTask({ id });
  }

  changeTimerState = id => () => {
    const { updateRunnigTask, runingTask, updateFact } = this.props;
    const { timer } = this.state;
    timer.addEventListener('secondsUpdated', () => {
      updateFact({ id, fact: timer.getTimeValues().toString() });
    });
    if (runingTask === '-1') {
      updateRunnigTask({ id });
      this.setState({ timerButton: 'start' });
      timer.start();
    } else if (runingTask === id) {
      updateRunnigTask({ id: '-1' });
      this.setState({ timerButton: 'stop' });
      timer.pause();
    } else {
      this.setState({ showModal: true });
    }
  }

  handleCloseModal = () => this.setState({ showModal: false });

  renderModal() {
    const { showModal } = this.state;
    return (
    <Modal show={showModal} onHide={this.handleCloseModal}>
      <Modal.Header>
        <Modal.Title>Another task started</Modal.Title>
      </Modal.Header>
      <Modal.Footer>
        <Button variant="secondary" onClick={this.handleCloseModal}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
    );
  }

  render() {
    const {
      task,
      updateTaskText,
      updatePlan,
      updatePercent,
    } = this.props;
    const { fact, percent } = task;
    const { timerButton } = this.state;
    const cond = (fact === '' || percent === '' || percent === '0');
    const necessary = cond ? null : getNecessary(fact, percent);
    const timerButtonClass = cn({
      [`timerButton ${timerButton}`]: true,
    });
    return (
      <div className="item">
        {this.renderModal()}
        <div className="numTask">
          <button className="newTask" onClick={this.removeTask(task.id)}>-</button>
          <div className="num">{task.id}</div>
        </div>
        <input className="task" placeholder="New task" onKeyUp={this.editCell(updateTaskText, 'text', task.id)}></input>
        <button className={timerButtonClass} onClick={this.changeTimerState(task.id)}></button>
        <input className="plan" placeholder="0" type="number" onKeyUp={this.editCell(updatePlan, 'plan', task.id)}></input>
        <div className="fact" data-placeholder="00:00:00">{fact}</div>
        <input className="percent" placeholder="0" type="number" onKeyUp={this.editCell(updatePercent, 'percent', task.id)}></input>
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
  runingTask: PropTypes.string,
  updateRunnigTask: PropTypes.func,
};
