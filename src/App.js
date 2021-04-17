import React from 'react';
import { Grid, Row, Col, Button } from 'rsuite';
import 'rsuite/lib/styles/index.less'; // or 'rsuite/dist/styles/rsuite-default.css'
import L2Cache from './modules/CacheL2/CacheL2';
import MainMemory from './modules/MainMemory/MainMemory';
import Node from './modules/Node/Node';


import Dashboard from './modules/Dashboard/Dashboard';
import CacheL1Editor from './modules/CacheL1/CacheL1Modal';
import CacheL2Editor from './modules/CacheL2/CacheL2Modal';
export const App = props => {
  const editorConfig = {
    showModal: false,
    backDrop: false,
    id: null, // cacheL1 id
    blockId: null, // the block id
    address: null, // the address that will be stored
    value: null, // the value to be stored 
    state: null, // the state of the data
  };
  const editorCacheL2Config = {
    showModal: false,
    backDrop: false,
    id: null, // cacheL1 id
    block: null, // the block id
    address: null, // the address that will be stored
    data: null, // the value to be stored 
    state: null, // the state of the data,
    list: [0, 0, 0, 0]
  }
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
      <CacheL1Editor config={editorConfig}></CacheL1Editor>
      <CacheL2Editor config={editorCacheL2Config}></CacheL2Editor>
    </Grid>
  );
}
export default App;

/**
 *
 */