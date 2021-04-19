'use-strict'

import models from "../Core/models";

/**
 * Lets the user checks if its READ_HIT READ MISS,  WRITE HIT and  WRITE MISS
 * @param {*} instruction 
 * @param {*} cacheL1 
 */
export const processInstructionContext = (instruction, cacheL1) => {
  const { op, address, value } = instruction;
  console.log('processInstructionContext ');

  if (op === models.INSTRUCTION_TYPES.READ) {
    // dispatch(setInstructionTarget({
    //   id: props.id,
    //   instruction: {
    //     op: models.INSTRUCTION_TYPES.READ,
    //     address: dataInstruction.address,
    //     value: null
    //   },
    //   completed: false
    // }))

  } else if (op === models.INSTRUCTION_TYPES.WRITE) {

    //     console.log('handleInstruction dispatch(setInstructionTarget write');

    //     dispatch(setInstructionTarget({
    //       id: props.id,
    //       instruction: {
    //         op: models.INSTRUCTION_TYPES.WRITE,
    //         address: dataInstruction.address,
    //         value: dataInstruction.value
    //       },
    //       completed: false
    //     }))
    //   }
  }
}
export default processInstructionContext;