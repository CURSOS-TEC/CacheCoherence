import React from 'react';
import { useSelector } from 'react-redux';
import { Panel } from 'rsuite';
import InstructorGenerator from '../Core/InstructionGenerator';
import models from '../Core/models';
import { fetch } from './CPUSlice';
import { useDispatch } from 'react-redux';

import './CPU.css';
/**
 * Esta clase abstrae la simulación de 
 */
export const CPU = (props) => {
  //const dispatch = useDispatch();
  const dataInstruction = useSelector(state => state.CPUs.value[props.id]);
  console.log(dataInstruction);
  // const fetchInstructions = () => {

  //   const generator = new InstructorGenerator();
  //   setInterval(() => {
  //     let instruction = generator.generateInstruction();
  //     console.log('for CP1 ', props.id);
  //     // dispatch(fetch({ id: props.id, ...instruction }));
  //     // setInstruction({ instruction: generator.generateInstruction() });
  //   }, 10000);

  // }
  // fetchInstructions();
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
  return (
    <Panel header="CPU" bordered>
      <p className="operation">
        <strong>P{props.id}</strong>: <DisplayOperation instruction={dataInstruction}></DisplayOperation>
      </p>
    </Panel>
  );

}
export default CPU;
