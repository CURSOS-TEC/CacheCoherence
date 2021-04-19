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
                data: '0x00'
            },
            {
                block: '1',
                state: 'DS',
                address: '0x2',
                data: '0x00'
            },
            {
                block: '2',
                state: 'N/A',
                address: '0x3',
                data: '0x00'
            },
            {
                block: '3',
                state: 'DI',
                address: '0x4',
                data: '0x00'
            },
            {
                block: '4',
                state: 'N/A',
                address: '0x5',
                data: '0x00'
            },
            {
                block: '5',
                state: 'DS',
                address: '0x6',
                data: '0x00'
            },
            {
                block: '6',
                state: 'N/A',
                address: '0x7',
                data: '0x00'
            },
            {
                block: '7',
                state: 'DI',
                address: '0x8',
                data: '0x00'
            }
        ],
    },
    reducers: {
        write: (state, action) => {
            state.value.find ( item => item.address === action.payload.address).data = action.payload.data ;
            //console.log('State', state.value);
            localStorage.setItem('RAM',state.value);
        }
    }
})
export const { write } = mainMemorySlice.actions;
export default mainMemorySlice.reducer;