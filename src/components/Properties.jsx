import React from 'react';
import styles from './Properties.module.css';

export default class Properties extends React.Component {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <div className="properties">
        <button className={styles.button}>button</button>
      </div>
    );
  }
}
