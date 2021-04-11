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
    return (
      <Panel className="NodePanel" bordered>
        <Row>
          <Col md="2"># </Col>
          <Col md={12}>
            <L1Cache />
          </Col>
          <Col md={10}>
            <CPU />
            <Control />
          </Col>
        </Row>
      </Panel>

    )
  }
}
export default Node;