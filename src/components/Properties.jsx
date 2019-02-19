import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import styles from './Properties.module.css';

export default class Properties extends React.Component {
  editDescription = ({ target: { value } }) => {
    const { activeProperties, changeDescription } = this.props;
    changeDescription({ id: activeProperties, description: value });
  };

  close = () => this.props.changeActiveProperties('-1');

  render() {
    // console.log(this.props);
    const { tasks, activeProperties } = this.props;
    if (activeProperties === '-1') {
      return null;
    }
    return (
      <div className={styles.root}>
        <div className={styles.header}>
          <button className={styles.close} onClick={this.close}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        <p>Description</p>
        <textarea cols="25" rows="10" onChange={this.editDescription} value={tasks[activeProperties].description} placeholder='Add a more detailed description'></textarea>
      </div>
    );
  }
}

Properties.propTypes = {
  activeProperties: PropTypes.string,
  changeDescription: PropTypes.func,
  changeActiveProperties: PropTypes.func,
  tasks: PropTypes.object,
};
