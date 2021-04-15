import React from 'react';
import { Grid, Row, Col, Button } from 'rsuite';
import 'rsuite/lib/styles/index.less'; // or 'rsuite/dist/styles/rsuite-default.css'
import L2Cache from './modules/CacheL2/CacheL2';
import MainMemory from './modules/MainMemory/MainMemory';
import Node from './modules/Node/Node';

// To test RAM
import {useDispatch } from 'react-redux';
import { write } from './modules/MainMemory/MainMemorySlice';
import { fetch } from './modules/CPU/CPUSlice';
import Dashboard from './modules/Dashboard/Dashboard';

export const App = props => {
  const dispatch = useDispatch();
  return (
    <Grid fluid>
      <Button onClick={() => dispatch(write({'address': '0x1', 'value':'0x12'}))}> Test RAM </Button>
      <Button onClick={() => dispatch(fetch({'id': '1', 'op':'WRITE', 'address': '0x1', 'value': '0x88'}))}> Test CPU </Button>
      <Row>
        <Col md={12}><Node id={0} /></Col>
        <Col md={12}> <Node id={1} /></Col>
      </Row>
      <Row>
        <Col md={12}><Node id={2} /></Col>
        <Col md={12}> <Node id={3} /></Col>
      </Row>
      <Row>
        <Col md={10}><L2Cache></L2Cache> </Col>
        <Col md={6}><MainMemory></MainMemory> </Col>
        <Col md={6}> <Dashboard></Dashboard></Col>
      </Row>

    </Grid>
  );
}
export default App;

/**
 *
 */