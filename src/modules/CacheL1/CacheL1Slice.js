'use-strict'
import { createSlice } from '@reduxjs/toolkit';
import models from '../Core/models';
export const cacheL1Slice = createSlice({
  name: 'CachesL1',
  initialState: {
    value: [
      {
        id: '0',
        targetAddress: '',
        targetValue: '',
        blocks: [
          {
            block: '0',
            state: models.CACHE_L1_STATES.INVALID,
            address: '0x0',
            data: '0x00'
          },
          {
            block: '1',
            state: models.CACHE_L1_STATES.INVALID,
            address: '0x0',
            data: '0x00'
          }
        ]
      },
      {
        id: '1',
        targetAddress: '',
        targetValue: '',
        blocks: [
          {
            block: '0',
            state: models.CACHE_L1_STATES.INVALID,
            address: '0x0',
            data: '0x00'
          },
          {
            block: '1',
            state: models.CACHE_L1_STATES.INVALID,
            address: '0x0',
            data: '0x00'
          }
        ]
      },
      {
        id: '3',
        targetAddress: '',
        targetValue: '',
        blocks: [
          {
            block: '0',
            state: models.CACHE_L1_STATES.INVALID,
            address: '0x0',
            data: '0x00'
          },
          {
            block: '1',
            state: models.CACHE_L1_STATES.INVALID,
            address: '0x0',
            data: '0x00'
          }
        ]
      },
      {
        id: '4',
        targetAddress: '',
        targetValue: '',
        blocks: [
          {
            block: '0',
            state: models.CACHE_L1_STATES.INVALID,
            address: '0x0',
            data: '0x00'
          },
          {
            block: '1',
            state: models.CACHE_L1_STATES.INVALID,
            address: '0x0',
            data: '0x00'
          }
        ]
      }
    ]
  },
  reducers: {
    setBlock: (rState, action) => {
      const {id, block, state,address,data } = action.payload;
      const cacheL1 = rState.value.find( cache => {
        return cache.id === id;
      });
      if(cacheL1){

        const blockToEdit = cacheL1.blocks.find ( blockItem => {
          return blockItem.block === block;
        });
        blockToEdit.state = state;
        blockToEdit.address = address;
        blockToEdit.data = data;
      }else {
        console.log('Could not find the object',action.payload);
      }
    }
  }
});

export const { setBlock} = cacheL1Slice.actions;
export default cacheL1Slice.reducer;