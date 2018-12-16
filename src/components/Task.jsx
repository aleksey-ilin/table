import React from 'react';
import './Task.css';
import PropTypes from 'prop-types';
import { round } from 'lodash';
import cn from 'classnames';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';

export default class Tasks extends React.Component {
  state = { timerButton: 'stop', showModal: false };

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

  changeTimerState = id => (e) => {
    e.preventDefault();
    const { updateRunnigTask, runingTask } = this.props;
    if (Number(runingTask) === -1) {
      updateRunnigTask({ id });
      const { timerButton } = this.state;
      const newTimerButton = timerButton === 'stop' ? 'start' : 'stop';
      this.setState({ timerButton: newTimerButton });
    } else if (runingTask === id) {
      updateRunnigTask({ id: '-1' });
      const { timerButton } = this.state;
      const newTimerButton = timerButton === 'stop' ? 'start' : 'stop';
      this.setState({ timerButton: newTimerButton });
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
    const { task } = this.props;
    const { plan, fact, percent } = task;
    const { timerButton } = this.state;
    const cond = (plan === '' || fact === '' || percent === '');
    const necessary = cond ? null : round(((100 * fact / percent) - fact), 1);
    const timerButtonName = timerButton === 'stop' ? 'Stop' : 'Start';
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
        <input className="task" placeholder="New task" onKeyUp={this.editTaskText(task.id)}></input>
        <button className={timerButtonClass} onClick={this.changeTimerState(task.id)}>
          { timerButtonName }
        </button>
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
  runingTask: PropTypes.string,
  updateRunnigTask: PropTypes.func,
};
