'use-strict'
import { createSlice } from '@reduxjs/toolkit';
export const mainMemorySlice = createSlice({
    name: 'RAM',
    initialState: {
        value: [
            {
                block: '0',
                state: 'N/A',
                address: '0x1',
                data: '0x9F'
            },
            {
                block: '1',
                state: 'DS',
                address: '0x23',
                data: '0x9F'
            },
            {
                block: '2',
                state: 'N/A',
                address: '0x1',
                data: '0x9F'
            },
            {
                block: '3',
                state: 'DI',
                address: '0x23',
                data: '0x9F'
            },
            {
                block: '4',
                state: 'N/A',
                address: '0x1',
                data: '0x9F'
            },
            {
                block: '5',
                state: 'DS',
                address: '0x23',
                data: '0x9F'
            },
            {
                block: '6',
                state: 'N/A',
                address: '0x1',
                data: '0x9F'
            },
            {
                block: '7',
                state: 'DI',
                address: '0x23',
                data: '0x9F'
            }
        ],
    },
    reducers: {
        write: (state, action) => {
            state.value.find ( item => item.address === action.payload.address).data = action.payload.value;
            console.log('State', state.value);
        }
    }
})
export const { write } = mainMemorySlice.actions;
export default mainMemorySlice.reducer;