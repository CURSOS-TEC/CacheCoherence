import React from 'react';

import { Row, Col, Panel } from 'rsuite';
import Control from '../Control/Control';
import L1Cache from '../CacheL1/L1Cache';
import CPU from '../CPU/CPU';
import './Node.css';
class Node extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);
    return (
      <Panel className="NodePanel" bordered>
        <Row>
          <Col md={2}><p class="identifier"># {this.props.id}</p></Col>
          <Col md={12}>
            <L1Cache />
          </Col>
          <Col md={10}>
            <CPU id={this.props.id} />
            <Control />
          </Col>
        </Row>
      </Panel>

    )
  }
}
export default Node;