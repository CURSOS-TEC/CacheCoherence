'use-strict'
import React from 'react';
import { Grid, Row, Col, Button, Input, InputGroup, Panel, Toggle, Tag } from 'rsuite';
import { useDispatch } from 'react-redux';
import InstructorGenerator from '../Core/InstructionGenerator';
import { useSelector } from 'react-redux';
import './Dashboard.css';
// RAM Write ops
import { write } from '../MainMemory/MainMemorySlice';
// CPU 
import { fetch, setFetch } from '../CPU/CPUSlice';
//CacheL1
import { setBlock } from './../CacheL1/CacheL1Slice';
const styles = {
  marginBottom: 10
}

export const Dashboard = function () {
  const customInstruction = {
    id: '',
    op: '',
    address: '',
    value: ''
  };


  const allCPUS = useSelector(state => state.CPUs.value);

  const generator = new InstructorGenerator();
  const fetchInstruction = (processorId) => {
    return { id: processorId, ...generator.generateInstruction(processorId) };
  }
  const dispatch = useDispatch();
  const dispatchFetch = () => {
    for (const cpu of allCPUS) {
      if (cpu.canFetch) {
        dispatch(fetch(fetchInstruction(cpu.id)));
      }
    }
  };
  const CustomInputGroupWidthButton = ({ placeholder, ...props }) => (
    <Row className="inputContainer">
      <Col md={12}>
        <InputGroup {...props} inside style={styles}>
          <InputGroup.Addon>P</InputGroup.Addon>
          <Input placeholder={placeholder} onChange={(value, event) => {
            customInstruction.id = value;
          }} />
        </InputGroup>
      </Col>
      <Col md={12}>
        <InputGroup {...props} inside style={styles} >
          <InputGroup.Addon>Op</InputGroup.Addon>
          <Input placeholder={placeholder} onChange={(value, event) => {
            customInstruction.op = value;
          }} />
        </InputGroup>
      </Col>
      <Col md={12}>
        <InputGroup {...props} inside style={styles}>
          <InputGroup.Addon>0x</InputGroup.Addon>
          <Input placeholder={placeholder} onChange={(value, event) => {
            customInstruction.address = value;
          }} />
        </InputGroup>
      </Col>
      <Col md={12}>
        <InputGroup {...props} inside style={styles}>
          <InputGroup.Addon>Val</InputGroup.Addon>
          <Input placeholder={placeholder} onChange={(value, event) => {
            customInstruction.value = value;
          }} />
        </InputGroup>
      </Col>
    </Row>
  );

  const testDispatch = () => {
    //dispatch(setBlock({ id: '0', block: '1', state: 'M', address: '0x00', data: '0xFF' }));
    // CACHEL1
    if (customInstruction.id && customInstruction.value && customInstruction.address && customInstruction.op) {
      dispatch(fetch(customInstruction));
    }
  }
  return (
    <Panel header="Control Dashboard" bordered >
      <Grid fluid>
        <Row>
          <Col md={24}>
            <CustomInputGroupWidthButton></CustomInputGroupWidthButton>
          </Col>
        </Row>
        <Row className="controlsButtons">
          <Col className="buttonContainer" md={12}><Button onClick={() => dispatchFetch()} > Next Cycle </Button></Col>
          <Col className="buttonContainer" md={12}> <Button onClick={() => testDispatch()}> Continue </Button></Col>
        </Row>
        <Row>
          <Col className="cpuSwitch" md={12}>
            <Tag>P0</Tag>
            <Toggle defaultChecked size="md" checkedChildren="READY" unCheckedChildren="IDLE" onChange={(checked, event) => {
              dispatch(setFetch({ id: '0', canFetch: checked }));
            }} />
          </Col>
          <Col className="cpuSwitch" md={12}>
            <Tag>P1</Tag>
            <Toggle defaultChecked size="md" checkedChildren="READY" unCheckedChildren="IDLE" onChange={(checked, event) => {
              dispatch(setFetch({ id: '1', canFetch: checked }));
            }} />
          </Col>
        </Row>
        <Row>
          <Col className="cpuSwitch" md={12}>
            <Tag>P2</Tag>
            <Toggle defaultChecked size="md" checkedChildren="READY" unCheckedChildren="IDLE" onChange={(checked, event) => {
              dispatch(setFetch({ id: '2', canFetch: checked }));
            }} />
          </Col>
          <Col className="cpuSwitch" md={12}>
            <Tag>P3</Tag>
            <Toggle defaultChecked size="md" checkedChildren="READY" unCheckedChildren="IDLE" onChange={(checked, event) => {
              dispatch(setFetch({ id: '3', canFetch: checked }));
            }} />
          </Col>
        </Row>
      </Grid>
    </Panel>
  );
}
export default Dashboard;