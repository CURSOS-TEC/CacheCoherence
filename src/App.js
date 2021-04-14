import React from 'react';
import { Grid, Row, Col, Divider } from 'rsuite';
import 'rsuite/lib/styles/index.less'; // or 'rsuite/dist/styles/rsuite-default.css'
import L2Cache from './modules/CacheL2/CacheL2';
import MainMemory from './modules/MainMemory/MainMemory';
import Node from './modules/Node/Node';
import context from './modules/Init/init-data';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {context};

  }
  render() {
    console.log(this.state);
    return (
      <Grid fluid>
        <Row>
          <Col md={12}><Node id={this.state.context.NODES[0].id} /></Col>
          <Col md={12}> <Node id={this.state.context.NODES[1].id} /></Col>
        </Row>
        <Row>
          <Col md={12}><Node id={this.state.context.NODES[2].id} /></Col>
          <Col md={12}> <Node id={this.state.context.NODES[3].id} /></Col>
        </Row>
        <Row>
          <Col md={10}><L2Cache></L2Cache> </Col>
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