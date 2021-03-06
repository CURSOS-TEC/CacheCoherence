'use-strict'
import { createSlice } from '@reduxjs/toolkit'
export const queueTaskSlice = createSlice({
    name: 'QueueTask',
    /**
     * {
            processorId: 0,
            op: models.INSTRUCTION_TYPES.CALC,
            address: '0x1',
            value: '0x33',
            condition: models.COHERENCE_STATUS.READ_HIT,
            identifier: Date.now() 
        }
     */
    initialState: {
        value: [
        ]
    },
    reducers: {
        /**
         * processorId: 0,
         * op: CALC, READ, WRITE
         * address: 0x7
         * value: 0xFF
         * condition: MISS, HIT
         * identifier: Date.now
         */
        enQueue: (rState, action) => {
            rState.value.push(action.payload);
            localStorage.setItem('QueueTask', JSON.stringify(rState.value));
        },
        deQueue: (rState, action) => {
            rState.value.shift();
            localStorage.setItem('QueueTask', JSON.stringify(rState.value));
        }
    }

});
export const { enQueue } = queueTaskSlice.actions;
export default queueTaskSlice.reducer;
