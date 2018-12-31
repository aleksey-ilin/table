import React from 'react';
import PropTypes from 'prop-types';
import styles from './Properties.module.css';

export default class Properties extends React.Component {
  // eslint-disable-next-line class-methods-use-this
  render() {
    console.log(this.props);
    if (this.props.activePropertiesTask === '-1') {
      return null;
    }
    return (
      <div className={styles.properties}>
        <div>Description</div>
        <textarea cols="25" rows="10"></textarea>
      </div>
    );
  }
}

Properties.propTypes = {
  activePropertiesTask: PropTypes.string,
};
