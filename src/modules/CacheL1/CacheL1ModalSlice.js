'use-strict'
import { createSlice } from '@reduxjs/toolkit'
export const cacheL1ModalSlice = createSlice({
    name: 'GUI_CacheL1Modal',
    initialState: {
        value: {
            showModal: false,
            backDrop: false,
            id: null, // cacheL1 id
            blockId: null, // the block id
            address: null, // the address that will be stored
            data: null, // the value to be stored 
            state: null, // the state of the data
        }
    },
    reducers: {
        setModalCacheL1Config: (rState, action) => {
            const { showModal,
                backDrop,
                id, // cacheL1 id
                blockId, // the block id
                address, // the address that will be stored
                data, // the value to be stored 
                state /*// the state of the data}*/} = action.payload; 
            rState.value.showModal = showModal;
            rState.value.backDrop = backDrop;
            rState.value.id = id;
            rState.value.blockId = blockId;
            rState.value.address = address;
            rState.value.data = data;
            rState.value.state = state;
        }
    }

});
export const {setModalCacheL1Config} = cacheL1ModalSlice.actions;
export default cacheL1ModalSlice.reducer;
