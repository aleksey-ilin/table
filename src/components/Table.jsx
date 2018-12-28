import React from 'react';
import PropTypes from 'prop-types';
import styles from './Table.module.css';
import Task from '../containers/Task';

export default class Table extends React.Component {
  addTask = (e) => {
    e.preventDefault();
    const { newTaskText, addTask } = this.props;
    addTask({
      text: newTaskText,
      plan: '',
      fact: '',
      percent: '',
    });
  }

  render() {
    const { tasks } = this.props;
    return (
      <div className={styles.table}>
        <div className={styles.thead}>
          <div className={styles.numTask}>
            <button className={styles.newTask} onClick={this.addTask}>+</button>
            <div className={styles.num}>№</div>
          </div>
          <div className={styles.task}>Tasks</div>
          <div className={styles.plan}>Plan, h</div>
          <div className={styles.fact}>Fact</div>
          <div className={styles.percent}>Done, %</div>
          <div className={styles.necessary}>Necessary, h</div>
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
