import React from 'react';
import { Grid, Row, Col, Button } from 'rsuite';
import 'rsuite/lib/styles/index.less'; // or 'rsuite/dist/styles/rsuite-default.css'
import L2Cache from './modules/CacheL2/CacheL2';
import MainMemory from './modules/MainMemory/MainMemory';
import Node from './modules/Node/Node';


import Dashboard from './modules/Dashboard/Dashboard';
import CacheL1Editor from './modules/CacheL1/CacheL1Modal';
import CacheL2Editor from './modules/CacheL2/CacheL2Modal';
import RAMEditor from './modules/MainMemory/MainMemoryModal';
export const App = props => {
  return (
    <Grid fluid>
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
        <Col md={8}> <Dashboard></Dashboard></Col>
      </Row>
      <CacheL1Editor ></CacheL1Editor>
      <CacheL2Editor ></CacheL2Editor>
      <RAMEditor/>
    </Grid>
  );
}
export default App;

/**
 *
 */