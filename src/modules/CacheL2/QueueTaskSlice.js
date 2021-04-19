'use-strict'
import { createSlice } from '@reduxjs/toolkit'
import models from '../Core/models';
export const queueTaskSlice = createSlice({
    name: 'QueueTask',
    /**
     * {
            op: models.INSTRUCTION_TYPES.CALC,
            address: '0x1',
            value: '0x33',
            condition: models.COHERENCE_STATUS.READ_HIT,
            identifier: Date.now() 
        }
     */
    initialState: {
        value: [,
        ]
    },
    reducers: {
        /**
         * op: CALC, READ, WRITE
         * address: 0x7
         * value: 0xFF
         * condition: MISS, HIT
         * identifier: Date.now
         */
        enQueue: (rState, action) => {
          rState.value.push(action.payload);
        },
        deQueue: (rState,action) => {
            rState.value.shift();
        }
    }

});
export const { enQueue } = queueTaskSlice.actions;
export default queueTaskSlice.reducer;
