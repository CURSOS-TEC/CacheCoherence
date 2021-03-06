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
        <Col md={14}>
          <CacheL1 id={props.id} />
        </Col>
        <Col md={10}>
          <CPU id={props.id} />
          <Control id={props.id} />
        </Col>
      </Row>
    </Panel>
  )
}
export default Node;