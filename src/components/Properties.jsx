import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faFolder, faInfo } from '@fortawesome/free-solid-svg-icons';
import styles from './Properties.module.scss';

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
        <div className={styles.project}>
          <div className={styles.project_title}>
            <FontAwesomeIcon className={styles.project_title_icon} icon={faFolder} />
            <p className={styles.project_title_name}>Project</p>
          </div>
          <button className={styles.project_button}>Select project</button>
        </div>
        <div className={styles.description}>
          <div className={styles.description_title}>
          <FontAwesomeIcon className={styles.description_title_icon} icon={faInfo} />
          <p className={styles.description_title_name}>Description</p>
          </div>
          <textarea className={styles.description_field} rows="10" onChange={this.editDescription} value={tasks[activeProperties].description} placeholder='Add a more detailed description'></textarea>
        </div>
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
