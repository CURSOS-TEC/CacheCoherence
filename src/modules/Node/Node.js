import React from 'react';

import { Row, Col, Panel } from 'rsuite';
import Control from '../Control/Control';
import CacheL1 from '../CacheL1/CacheL1';
import CPU from '../CPU/CPU';
import './Node.css';
export const Node = props => {
  return (
    <Panel className="NodePanel" bordered>
      <Row>
        <Col md={2}><p className="identifier"># {props.id}</p></Col>
        <Col md={12}>
          <CacheL1 />
        </Col>
        <Col md={10}>
          <CPU id={props.id} />
          <Control />
        </Col>
      </Row>
    </Panel>
  )
}
export default Node;