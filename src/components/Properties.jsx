import React from 'react';
import PropTypes from 'prop-types';
import styles from './Properties.module.css';

export default class Properties extends React.Component {
  editDescription = ({ target: { value } }) => {
    const { activeProperties } = this.props;
    this.props.changeDescription({ id: activeProperties, description: value });
  };

  render() {
    // console.log(this.props);
    const { tasks, activeProperties } = this.props;
    if (this.props.activeProperties === '-1') {
      return null;
    }
    return (
      <div className={styles.properties}>
        <p>Description</p>
        <textarea cols="25" rows="10" onChange={this.editDescription} value={tasks[activeProperties].description}></textarea>
      </div>
    );
  }
}

Properties.propTypes = {
  activeProperties: PropTypes.string,
  changeDescription: PropTypes.func,
  tasks: PropTypes.object,
};
