'use-strict'
import React from 'react';
import { Grid, Row, Col, Button, Input, InputGroup, Panel } from 'rsuite';
import { useDispatch } from 'react-redux';
import InstructorGenerator from '../Core/InstructionGenerator';
import { useSelector } from 'react-redux';
// RAM Write ops
import { write } from '../MainMemory/MainMemorySlice';
// CPU 
import { fetch, setFetch } from '../CPU/CPUSlice';
//CacheL1
import { setBlock } from './../CacheL1/CacheL1Splice';
const styles = {
  marginBottom: 10
}

export const Dashboard = function () {
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
    <Row>
      <Col md={9}>
        <InputGroup {...props} inside style={styles}>
          <InputGroup.Addon>P</InputGroup.Addon>
          <Input placeholder={placeholder} />
        </InputGroup>
      </Col>
      <Col md={9}>
        <InputGroup {...props} inside style={styles}>
          <InputGroup.Addon>Op</InputGroup.Addon>
          <Input placeholder={placeholder} />
        </InputGroup>
      </Col>
      <Col md={9}>
        <InputGroup {...props} inside style={styles}>
          <InputGroup.Addon>0x</InputGroup.Addon>
          <Input placeholder={placeholder} />
        </InputGroup>
      </Col>
      <Col md={9}>
        <InputGroup {...props} inside style={styles}>
          <InputGroup.Addon>Value</InputGroup.Addon>
          <Input placeholder={placeholder} />
        </InputGroup>
      </Col>
    </Row>
  );

  const testDispatch = () => {
    //dispatch(setFetch({ id: '2', canFetch: true })); //CPU
    dispatch(setBlock({ id: '0', block: '1', state: 'M', address: '0x00', data: '0xFF' })); 
    // CACHEL1
  }
  return (
    <Panel header="Control Dashboard" bordered >
      <Grid fluid>
        <Row>
          <Col md={24}>
            <CustomInputGroupWidthButton></CustomInputGroupWidthButton>
          </Col>
        </Row>
        <Row>
          <Col md={12}><Button onClick={() => dispatchFetch()} > Next Cycle </Button></Col>
          <Col md={12}> <Button onClick={() => testDispatch()}> Continue </Button></Col>
        </Row>
      </Grid>
    </Panel>
  );
}
export default Dashboard;