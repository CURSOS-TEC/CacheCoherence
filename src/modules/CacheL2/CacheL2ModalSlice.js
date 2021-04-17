'use-strict'
import { createSlice } from '@reduxjs/toolkit'
export const cacheL2ModalSlice = createSlice({
    name: 'GUI_CacheL2Modal',
    initialState: {
        value: {
            showModal: false,
            backDrop: false,
            id: null, // cacheL1 id
            block: null, // the block id
            address: null, // the address that will be stored
            data: null, // the value to be stored 
            state: null, // the state of the data,
            list: [0, 0, 0, 0]
        }
    },
    reducers: {
        setModalCacheL2Config: (rState, action) => {
            const { showModal,
                backDrop,
                id, // cacheL1 id
                block, // the block id
                address, // the address that will be stored
                data, // the value to be stored 
                state, /*// the state of the data}*/
                list } = action.payload;
            rState.value.showModal = showModal;
            rState.value.backDrop = backDrop;
            rState.value.id = id;
            rState.value.block = block;
            rState.value.address = address;
            rState.value.data = data;
            rState.value.state = state;
            rState.value.list = list;
        }
    }

});
export const { setModalCacheL2Config } = cacheL2ModalSlice.actions;
export default cacheL2ModalSlice.reducer;
