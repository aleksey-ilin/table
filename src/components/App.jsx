import React from 'react';
import './App.css';
import Container from 'react-bootstrap/lib/Container';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Table from '../containers/Table';
import Properties from '../containers/Properties';

const App = () => (
  <div className="App">
    <Container fluid={true}>
      <Row>
        <Col lg="12" className="header">header</Col>
      </Row>
      <Row>
        <Col lg="2" className="sidebar"><Properties /></Col>
        <Col lg="10" className="content"><Table /></Col>
      </Row>
      <Row>
        <Col className="footer">footer</Col>
      </Row>
    </Container>
  </div>
);

export default App;
