import React from 'react';
import { Grid, Row, Col, Divider } from 'rsuite';
import 'rsuite/lib/styles/index.less'; // or 'rsuite/dist/styles/rsuite-default.css'
import L2Cache from './modules/CacheL2/CacheL2';
import MainMemory from './modules/MainMemory/MainMemory';
import Node from './modules/Node/Node';
class App extends React.Component {
  render() {
    return (
      <Grid fluid>
        <Row>
          <Col md={12}><Node /></Col>
          <Col md={12}> <Node /></Col>
        </Row>
        <Row>
          <Col md={12}><Node /></Col>
          <Col md={12}> <Node /></Col>
        </Row>
        <Row>
          <Col md={6}><L2Cache></L2Cache> </Col>
          <Col md={6}><MainMemory></MainMemory> </Col>
        </Row>

      </Grid>
    );
  }
}

export default App;

/**
 *
 */