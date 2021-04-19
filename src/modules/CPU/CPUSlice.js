'use-strict'
import { createSlice } from '@reduxjs/toolkit';
export const cpuSlice = createSlice({
    name: 'CPUs',
    initialState: {
        value: [
            {
                // identifier
                id: '0',
                // used in order 
                canFetch: true,
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
                // used in order 
                canFetch: true,
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
                // used in order 
                canFetch: true,
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
                // used in order 
                canFetch: true,
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
            //console.log(action.payload);
            const { id, op, value, address,canFetch } = action.payload;
            const cpu = state.value.find((item) => {
                return item.id === id;
            });
            cpu.op = op;
            cpu.address = address;
            cpu.value = value;
            cpu.canFetch = canFetch;
        },
        setFetch: (state, action) => {
            const { id, canFetch } = action.payload;
            const cpu = state.value.find((item) => {
                return item.id === id;
            });
            if (cpu) {
                cpu.canFetch = canFetch;
            }else {
                console.log(`Can't make the fetch`, id, canFetch);
            }

        }

    }
}
);
export const { fetch, setFetch } = cpuSlice.actions;
export default cpuSlice.reducer;