'use-strict'
import { createSlice } from '@reduxjs/toolkit';
export const cpuSlice = createSlice({
    name: 'CPUs',
    initialState: {
        value: [
            {
                // identifier
                id: '0',
                //op
                op: 'CALC',
                //value
                value: '',
                //address
                address: ''
            },
            {
                // identifier
                id: '1',
                //op
                op: 'CALC',
                //value
                value: '',
                //address
                address: ''
            },
            {
                // identifier
                id: '2',
                //op
                op: 'CALC',
                //value
                value: '',
                //address
                address: ''
            },
            {
                // identifier
                id: '3',
                //op
                op: 'CALC',
                //value
                value: '',
                //address
                address: ''
            }
        ]
    },
    reducers: {
        fetch: (state, action) => {
            console.log(action.payload);
            const { id, op, value, address } = action.payload;
            const cpu = state.value.find((item) => {
                return item.id === id;
            });         
            cpu.op = op;
            cpu.address = address;
            cpu.value = value;
        }
    }
}
);
export const { fetch } = cpuSlice.actions;
export default cpuSlice.reducer;