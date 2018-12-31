import React from 'react';
import Container from 'react-bootstrap/lib/Container';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styles from './App.module.css';
import Table from '../containers/Table';
import Properties from '../containers/Properties';

const App = () => {
  // console.log(this.props);
  return (
  <div className={styles.app}>
    <Container fluid={true}>
      <Row>
        <Col lg="12" className={styles.header}></Col>
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
};

export default App;
