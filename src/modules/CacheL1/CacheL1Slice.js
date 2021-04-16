'use-strict'
import { createSlice } from '@reduxjs/toolkit';
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
            state: 'M',
            address: '0x1',
            data: '0x9F'
          },
          {
            block: '1',
            state: 'S',
            address: '0x23',
            data: '0x9F'
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
            state: 'M',
            address: '0x1',
            data: '0x9F'
          },
          {
            block: '1',
            state: 'S',
            address: '0x23',
            data: '0x9F'
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
            state: 'M',
            address: '0x1',
            data: '0x9F'
          },
          {
            block: '1',
            state: 'S',
            address: '0x23',
            data: '0x9F'
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
            state: 'M',
            address: '0x1',
            data: '0x9F'
          },
          {
            block: '1',
            state: 'S',
            address: '0x23',
            data: '0x9F'
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