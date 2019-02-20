import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';
import Timer from 'easytimer.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpandArrowsAlt } from '@fortawesome/free-solid-svg-icons';
import styles from './Task.module.css';
import { getNecessary } from '../utils';

const cx = classNames.bind(styles);

export default class Tasks extends React.Component {
  state = { timerButton: 'stop', showError: false, timer: new Timer() };

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
      this.setState({ showError: true });
    }
  }

  handleCloseModal = () => this.setState({ showError: false });

  showProperties = id => () => this.props.changeActiveProperties(id);

  renderError() {
    const { showError } = this.state;
    return (
    <Modal show={showError} onHide={this.handleCloseModal}>
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
    const necessary = getNecessary(fact, percent);
    const timerButtonClass = cx({
      timerButton: true,
      [this.state.timerButton]: true,
    });
    console.log(percent);
    const taskClass = cx({
      task: true,
      finished: percent >= 100,
    });
    return (
      <div className={styles.root}>
        {this.renderError()}
        <div className={styles.numTask}>
          <button className={styles.removeTask} onClick={this.removeTask(task.id)}>-</button>
          <div className={styles.num}>{task.id}</div>
        </div>
        <button className={styles.properties} onClick={this.showProperties(task.id)}>
          <FontAwesomeIcon icon={faExpandArrowsAlt} />
        </button>
        <input className={taskClass} placeholder="New task" onKeyUp={this.editCell(updateTaskText, 'text', task.id)}></input>
        <button className={timerButtonClass} onClick={this.changeTimerState(task.id)}></button>
        <input className={styles.plan} placeholder="0" type="number" onKeyUp={this.editCell(updatePlan, 'plan', task.id)}></input>
        <div className={styles.fact}>{fact}</div>
        <input className={styles.percent} placeholder="0" type="number" onKeyUp={this.editCell(updatePercent, 'percent', task.id)}></input>
        <div className={styles.necessary}>{ necessary }</div>
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
  changeActiveProperties: PropTypes.func,
  activeProperties: PropTypes.string,
};
