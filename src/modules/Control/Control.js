import React from 'react';
import { Panel } from 'rsuite';
import { useSelector, useDispatch } from 'react-redux';
import { setFetch } from './../CPU/CPUSlice';
import models from '../Core/models';
/**
 * this function handles when the CPU is requesting  for READ and Write OPS
 * @param {*} props 
 * @returns 
 */
export const Control = props => {

  const dispatch = useDispatch();
  const targetInstruction = useSelector(state => state.Controls.value[props.id]);
  const cacheData = useSelector(state => state.CachesL1.value[props.id]);




  //console.log(targetInstruction);
  const handleTargetInstruction = (instruction) => {
    if (instruction.op === models.INSTRUCTION_TYPES.READ) {
      console.log(instruction);
      const blockIndex = Number(instruction.address) % 2; // one way associative 
      const cacheLine = cacheData.blocks[blockIndex];
      console.log(instruction.address, blockIndex, cacheLine);
    } else if (instruction.op === models.INSTRUCTION_TYPES.WRITE) {

    }
    // check the cache L1 el estado de la información
  }
  handleTargetInstruction(targetInstruction.instruction);
  return (
    <Panel header="Control" bordered>
      <p> {targetInstruction.instruction.op}  {targetInstruction.instruction.address} {targetInstruction.instruction.value}</p>
    </Panel>
  );
}
export default Control;