'use-strict'
import React from 'react';
import { Divider, SelectPicker, Grid, Row, Col, Button, Input, InputGroup, Panel, Toggle, Tag } from 'rsuite';
import { useDispatch } from 'react-redux';
import InstructorGenerator from '../Core/InstructionGenerator';
import { useSelector } from 'react-redux';
import './Dashboard.css';
// RAM Write ops
// CPU 
import { fetch, setFetch } from '../CPU/CPUSlice';
//CacheL1
import models from '../Core/models';
const styles = {
  marginBottom: 10
}
const cpuOptions = [
  {
    "label": "P0",
    "value": "0",
    "role": "cpu"
  },
  {
    "label": "P1",
    "value": "1",
    "role": "cpu"
  },
  {
    "label": "P2",
    "value": "2",
    "role": "cpu"
  },
  {
    "label": "P3",
    "value": "3",
    "role": "cpu"
  },
];
const opOptions = [
  {
    "label": "READ",
    "value": models.INSTRUCTION_TYPES.READ,
    "role": "operation"
  },
  {
    "label": "WRITE",
    "value": models.INSTRUCTION_TYPES.WRITE,
    "role": "operation"
  },
  {
    "label": "CALC",
    "value": models.INSTRUCTION_TYPES.CALC,
    "role": "operation"
  },

];
const addressOptions = [
  {
    "label": "0x0",
    "value": "0x0",
    "role": "address"
  },
  {
    "label": "0x1",
    "value": "0x1",
    "role": "address"
  },
  {
    "label": "0x2",
    "value": "0x2",
    "role": "address"
  },
  {
    "label": "0x3",
    "value": "0x3",
    "role": "address"
  },
  {
    "label": "0x4",
    "value": "0x4",
    "role": "address"
  },
  {
    "label": "0x5",
    "value": "0x5",
    "role": "address"
  },
  {
    "label": "0x6",
    "value": "0x6",
    "role": "address"
  },
  {
    "label": "0x7",
    "value": "0x7",
    "role": "address"
  }
];
const selectorStyles = { width: 100, };

export const Dashboard = function () {
  const customInstruction = {
    id: '',
    op: '',
    address: '',
    value: '',
    canFetch: true
  };


  const allCPUS = useSelector(state => state.CPUs.value);

  const generator = new InstructorGenerator();
  const fetchInstruction = (processorId) => {
    return { id: processorId, ...generator.generateInstruction(processorId), canFetch:true };
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
          <SelectPicker
            size="md"
            placeholder="P"
            data={cpuOptions}
            style={selectorStyles}
            onChange={(value, event) => {
              customInstruction.id = value;
            }}
          />
        </InputGroup>
      </Col>
      <Col md={12}>
        <InputGroup {...props} inside style={styles} >
          <InputGroup.Addon>Op</InputGroup.Addon>
          <SelectPicker
            size="md"
            placeholder="Op"
            data={opOptions}
            style={selectorStyles}
            onChange={(value, event) => {
              customInstruction.op = value;
            }}
          />
        </InputGroup>
      </Col>
      <Col md={12}>
        <InputGroup {...props} inside style={styles}>
          <InputGroup.Addon>0x</InputGroup.Addon>
          <SelectPicker
            size="md"
            placeholder="Address"
            data={addressOptions}
            style={selectorStyles}
            onChange={(value, event) => {
              customInstruction.address = value;
            }}
          />
        </InputGroup>
      </Col>
      <Col md={12}>
        <InputGroup {...props} inside style={styles}>
          <Input placeholder={placeholder} onChange={(value, event) => {
            customInstruction.value = value;
          }} />
        </InputGroup>
      </Col>
      <Col className="buttonContainer" md={12}> <Button onClick={() => testDispatch()}> Continue </Button></Col>
      <Divider />
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
          {/* <Col className="buttonContainer" md={12}> <Button onClick={() => testDispatch()}> Continue </Button></Col> */}
        </Row>
        <Row>
          <Col className="cpuSwitch" md={12}>
            <Tag>P0</Tag>
            <Toggle defaultChecked={allCPUS[0].canFetch} size="md" checkedChildren="READY" unCheckedChildren="IDLE" onChange={(checked, event) => {
              dispatch(setFetch({ id: '0', canFetch: checked }));
            }} />
          </Col>
          <Col className="cpuSwitch" md={12}>
            <Tag>P1</Tag>
            <Toggle defaultChecked={allCPUS[1].canFetch} size="md" checkedChildren="READY" unCheckedChildren="IDLE" onChange={(checked, event) => {
              dispatch(setFetch({ id: '1', canFetch: checked }));
            }} />
          </Col>
        </Row>
        <Row>
          <Col className="cpuSwitch" md={12}>
            <Tag>P2</Tag>
            <Toggle defaultChecked={allCPUS[2].canFetch} size="md" checkedChildren="READY" unCheckedChildren="IDLE" onChange={(checked, event) => {
              dispatch(setFetch({ id: '2', canFetch: checked }));
            }} />
          </Col>
          <Col className="cpuSwitch" md={12}>
            <Tag>P3</Tag>
            <Toggle defaultChecked={allCPUS[3].canFetch} size="md" checkedChildren="READY" unCheckedChildren="IDLE" onChange={(checked, event) => {
              dispatch(setFetch({ id: '3', canFetch: checked }));
            }} />
          </Col>
        </Row>
      </Grid>
    </Panel>
  );
}
export default Dashboard;