import React from 'react';
import { Panel, Tag } from 'rsuite';
import { useSelector, useDispatch } from 'react-redux';
import { setFetch } from './../CPU/CPUSlice';
import models from '../Core/models';
import './Control.css';
/**
 * this function handles when the CPU is requesting  for READ and Write OPS
 * @param {*} props 
 * @returns 
 */
export const Control = props => {

  const dispatch = useDispatch();
  const targetInstruction = useSelector(state => state.Controls.value[props.id]);
  const cacheData = useSelector(state => state.CachesL1.value[props.id]);
  let currentBlockIndex = null;
  let message = '';
  const Flag = (props) => {

    switch (props.message) {
      case models.COHERENCE_STATUS.READ_HIT:
        return (
          <Tag><strong className="readHit">Read hit</strong> in block {props.blockIndex}: {props.instruction.address}  </Tag>
        )
      case models.COHERENCE_STATUS.READ_MISS:

        return (
          <Tag><strong className="readMiss">Read miss</strong> in block {props.blockIndex}:  {props.instruction.address}  </Tag>
        )
      case models.COHERENCE_STATUS.WRITE_HIT:

        return (
          <Tag><strong className="writeHit">Write hit</strong> in block {props.blockIndex}:  RAM[{props.instruction.address}]   {props.instruction.value}  </Tag>
        )
      case models.COHERENCE_STATUS.WRITE_MISS:

        return (
          <Tag><strong className="writeMiss">Write miss</strong> in block {props.blockIndex}: RAM[{props.instruction.address}]   {props.instruction.value}   </Tag>
        )

      default:
        return (<Tag >N/A</Tag>);
    }
  }




  //console.log(targetInstruction);
  const handleTargetInstruction = (instruction) => {
    //console.log(instruction);
    const blockIndex = Number(instruction.address) % 2; // one way associative 
    const cacheLine = cacheData.blocks[blockIndex];
    if (instruction.op === models.INSTRUCTION_TYPES.READ) {
      // check if data is here and its valid
      if (instruction.address === cacheLine.address && (cacheLine.state === models.CACHE_L1_STATES.MODIFIED || cacheLine.state === models.CACHE_L1_STATES.SHARED)) {
        console.log('READ HIT', cacheLine);
        message = models.COHERENCE_STATUS.READ_HIT;
      } else {
        console.log('READ MISS', cacheLine);
        message = models.COHERENCE_STATUS.READ_MISS;
      }
    } else if (instruction.op === models.INSTRUCTION_TYPES.WRITE) {
      // check if data is here and its valid
      if (instruction.address === cacheLine.address && (cacheLine.state === models.CACHE_L1_STATES.MODIFIED || cacheLine.state === models.CACHE_L1_STATES.SHARED)) {
        console.log('WRITE HIT', cacheLine);
        message = models.COHERENCE_STATUS.WRITE_HIT;
      } else {
        console.log('WRITE MISS', cacheLine);
        message = models.COHERENCE_STATUS.WRITE_MISS;
      }
    } else {
      message = "";
    }
    currentBlockIndex = blockIndex;
    // check the cache L1 el estado de la información
  }
  handleTargetInstruction(targetInstruction.instruction);
  return (

    <Panel header="Control, last memory-related instruction" bordered>
      <Flag message={message} instruction={targetInstruction.instruction} blockIndex={currentBlockIndex}></Flag>
    </Panel>
  );
}
export default Control;