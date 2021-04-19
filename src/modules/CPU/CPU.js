import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Panel, Tag } from 'rsuite';
import models from '../Core/models';
import { setInstructionTarget } from '../Control/ControlSlice';
import './CPU.css';
/**
 * Esta clase abstrae la simulación de 
 */
export const CPU = (props) => {
  const dispatch = useDispatch();
  const dataInstruction = useSelector(state => state.CPUs.value[props.id]);
  //console.log(dataInstruction);

  const handleInstruction = (instruction) => {
    console.log('handleInstruction');
    if (instruction.op === models.INSTRUCTION_TYPES.READ) {
      // read the value from Cache
      if (dataInstruction.canFetch) {
        dispatch(setInstructionTarget({
          id: props.id,
          instruction: {
            op: models.INSTRUCTION_TYPES.READ,
            address: dataInstruction.address,
            value: null
          },
          completed: false
        }))
      }
    } else if (instruction.op === models.INSTRUCTION_TYPES.WRITE) {
      // write the value to cache
      if (dataInstruction.canFetch) {
        dispatch(setInstructionTarget({
          id: props.id,
          instruction: {
            op: models.INSTRUCTION_TYPES.WRITE,
            address: dataInstruction.address,
            value: dataInstruction.value
          },
          completed: false
        }))
      }
    }
  }

  const DisplayOperation = (dProps) => {
    const data = dProps.instruction;
    if (data) {
      switch (data.op) {
        case models.INSTRUCTION_TYPES.WRITE:
          return (<span className="write-operation">
            {data.op}: [{data.address}]: {data.value}
          </span>);
        case models.INSTRUCTION_TYPES.READ:
          return (<span className="read-operation">
            {data.op}: [{data.address}]
          </span>);
        case models.INSTRUCTION_TYPES.CALC:
          return (<span className="calc-operation">
            {data.op}
          </span>);
        default:
          <p>No instruction</p>
          break;
      }
    }
    return null;
  };
  const DisplayState = (dProps) => {
    if (dProps.canFetch) {
      return (<Tag color="green">READY</Tag>);
    }
    else {
      return (<Tag color="red">IDLE</Tag>);
    }
  }
  handleInstruction(dataInstruction);
  return (
    <Panel bordered>
      <p className="identifier"> CPU #{props.id}</p>

      <DisplayState canFetch={dataInstruction.canFetch}></DisplayState>
      <p className="operation">
        <strong>P{props.id}</strong>: <DisplayOperation instruction={dataInstruction}></DisplayOperation>
      </p>
    </Panel>
  );

}
export default CPU;
