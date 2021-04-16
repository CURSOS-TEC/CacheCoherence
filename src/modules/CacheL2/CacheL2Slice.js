'use-strict'
import { createSlice } from '@reduxjs/toolkit';
import { cpuSlice } from '../CPU/CPUSlice';
export const cacheL2Slice = createSlice({
    name: 'CacheL2',
    initialState: {
        value: [
            {
                block: '0',
                state: 'DM',
                address: '0x0',
                data: '0x9F',
                list: [0, 0, 0, 0]
            },
            {
                block: '1',
                state: 'DM',
                address: '0x4',
                data: '0x9F',
                list: [0, 0, 0, 0]
            },
            {
                block: '2',
                state: 'DM',
                address: '0x1',
                data: '0x9F',
                list: [0, 0, 0, 0]
            },
            {
                block: '3',
                state: 'DM',
                address: '0x7',
                data: '0x9F',
                list: [0, 0, 0, 0]
            }
        ]
    },
    reducers: {
        setBlock: (prevState, action) => {
            const {
                block,
                state,
                address,
                data,
                list
            } = action.payload;
            const cacheL2Line = prevState.value.find((cacheLine) => {
                return cacheLine.block === block;
            });
            cacheL2Line.state = state;
            cacheL2Line.address = address;
            cacheL2Line.data = data;
            cacheL2Line.list = list;
        }
    }

});
export const { setBlock } = cacheL2Slice.actions;
export default cacheL2Slice.reducer;