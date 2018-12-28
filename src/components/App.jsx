import React from 'react';
import Container from 'react-bootstrap/lib/Container';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styles from './App.module.css';
import Table from '../containers/Table';
import Properties from '../containers/Properties';

const App = () => (
  <div className={styles.app}>
    <Container fluid={true}>
      <Row>
        <Col lg="12" className={styles.header}>header</Col>
      </Row>
      <Row>
        <Col lg="2" className={styles.sidebar}><Properties /></Col>
        <Col lg="10" className={styles.content}><Table /></Col>
      </Row>
      <Row>
        <Col className={styles.footer}>footer</Col>
      </Row>
    </Container>
  </div>
);

export default App;
