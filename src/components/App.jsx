import React from 'react';
import Container from 'react-bootstrap/lib/Container';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGrin, faBell, faHome } from '@fortawesome/free-solid-svg-icons';
import styles from './App.module.css';
import Table from '../containers/Table';
import Properties from '../containers/Properties';

const App = () => (
  <div className={styles.app}>
    <Container fluid={true}>
      <Row>
        <Col lg="12" className={styles.header}>
          <div className={styles.header_left}>
            <button className={styles.home}><FontAwesomeIcon icon={faHome} /></button>
            <button className={styles.projects}>Projects</button>
            <button className={styles.analytics}>Analytics</button>
          </div>
          <div className={styles.header_right}>
            <input className={styles.search} type="text" placeholder='Search'/>
            <div className={styles.time}>12:47</div>
            <button className={styles.bell}><FontAwesomeIcon icon={faBell} /></button>
            <button className={styles.user}><FontAwesomeIcon icon={faGrin} /></button>
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg="12" className={styles.content}>
          <div className={styles.table}><Table /></div>
          <div className={styles.properties}><Properties /></div>
        </Col>
      </Row>
      <Row>
        <Col className={styles.footer}></Col>
      </Row>
    </Container>
  </div>
);

export default App;
