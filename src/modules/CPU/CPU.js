import React, { useState } from 'react';
import { Panel, Button } from 'rsuite';
import InstructorGenerator from '../Core/InstructionGenerator';
import models from '../Core/models';
import './CPU.css';
/**
 * Esta clase abstrae la simulación de 
 */
export const CPU = (props) => {
  const generator = new InstructorGenerator();
  const [instruction, setInstruction] = useState(null);
  // const fetchInstructions = () => {
  //   setTimeout(() => {
  //     const generator = new InstructorGenerator();
  //     setInterval(() => {
  //       setInstruction({ instruction: generator.generateInstruction() });
  //     }, 5000);
  //   }, 2000);
  // }
  // fetchInstructions();
  const DisplayOperation = (dProps) => {
    console.log(dProps);
    const data = dProps?.instruction;
    if (data) {
      switch (data.instruction.op) {
        case models.INSTRUCTION_TYPES.WRITE:
          return (<span class="write-operation">
            {data.instruction.op}: [0x{data.instruction.address}]: {data.instruction.value}
          </span>);
        case models.INSTRUCTION_TYPES.READ:
          return (<span class="read-operation">
            {data.instruction.op}: [0x{data.instruction.address}]
          </span>);
        case models.INSTRUCTION_TYPES.CALC:
          return (<span class="calc-operation">
            {data.instruction.op}
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
      <Button onClick={ () => setInstruction({instruction: generator.generateInstruction()  })}> Generate Instruction </Button>
      <p class="operation">
        <strong>P{props.id}</strong>: <DisplayOperation instruction={instruction}></DisplayOperation>
      </p>
    </Panel>
  );

}
export default CPU;
