'use-strict'
import { createSlice } from '@reduxjs/toolkit';
import models from '../Core/models';
import { cpuSlice } from '../CPU/CPUSlice';
export const cacheL2Slice = createSlice({
    name: 'CacheL2',
    initialState: {
        value: [
            {
                block: '0',
                state: models.CACHE_L2_STATES.DIRECTORY_INVALID,
                address: '0x0',
                data: '0x0',
                list: [0, 0, 0, 0]
            },
            {
                block: '1',
                state: models.CACHE_L2_STATES.DIRECTORY_INVALID,
                address: '0x0',
                data: '0x0',
                list: [0, 0, 0, 0]
            },
            {
                block: '2',
                state: models.CACHE_L2_STATES.DIRECTORY_INVALID,
                address: '0x0',
                data: '0x0',
                list: [0, 0, 0, 0]
            },
            {
                block: '3',
                state: models.CACHE_L2_STATES.DIRECTORY_INVALID,
                address: '0x0',
                data: '0x0',
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
            if (cacheL2Line) {
                cacheL2Line.state = state;
                cacheL2Line.address = address;
                cacheL2Line.data = data;
                cacheL2Line.list = list;
            } else {
                console.log('Could not find the object', action.payload);

            }
        }
    }

});
export const { setBlock } = cacheL2Slice.actions;
export default cacheL2Slice.reducer;