'use-strict'
import { createSlice } from '@reduxjs/toolkit';
export const mainMemoryModalSlice = createSlice({
    name: 'RAM',
    initialState: {
        value: {
            block: null,
            state: null,
            address: null,
            data: null,
            backDrop: false,
            showModal: false
        }
    },
    reducers: {
        setModalMainMemoryConfig: (rState, action) => {
            const {
                block,
                state,
                address,
                data,
                backDrop,
                showModal
            } = action.payload;
            rState.value.block = block;
            rState.value.state = state;
            rState.value.address = address;
            rState.value.data = data;
            rState.value.backDrop = backDrop;
            rState.value.showModal = showModal;
        }
    }
})
export const { setModalMainMemoryConfig } = mainMemoryModalSlice.actions;
export default mainMemoryModalSlice.reducer;