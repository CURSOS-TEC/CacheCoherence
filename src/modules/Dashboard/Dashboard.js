'use-strict'
import React from 'react';
import { Grid, Row, Col, Button, Input, InputGroup, Panel } from 'rsuite';
import { useDispatch } from 'react-redux';
import { write } from '../MainMemory/MainMemorySlice';
import { fetch } from '../CPU/CPUSlice';
import InstructorGenerator from '../Core/InstructionGenerator';
const styles = {
  marginBottom: 10
}
export const Dashboard = function () {
  const generator = new InstructorGenerator();
  const fetchInstruction = (processorId) => {
    return { id: processorId, ...generator.generateInstruction(processorId) };
  }
  const dispatch = useDispatch();
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
  return (
    <Panel header="Control Dashboard" bordered >
      <Grid fluid>
        <Row>
          <Col md={24}>
            <CustomInputGroupWidthButton></CustomInputGroupWidthButton>
          </Col>
        </Row>
        <Row>
          <Col md={12}><Button onClick={() => {
            dispatch(fetch(fetchInstruction('0')));
            dispatch(fetch(fetchInstruction('1')));
            dispatch(fetch(fetchInstruction('2')));
            dispatch(fetch(fetchInstruction('3')));
          }} > Next Cycle </Button></Col>
          <Col md={12}> <Button onClick={() => fetchInstruction()}> Continue </Button></Col>
        </Row>
      </Grid>
    </Panel>
  );
}
export default Dashboard;