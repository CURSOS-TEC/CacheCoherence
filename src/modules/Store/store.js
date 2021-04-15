'use-strict'
import { configureStore } from '@reduxjs/toolkit';
import mainMemoryReducer   from  '../MainMemory/MainMemorySlice';
export default configureStore({
    reducer: {
        RAM: mainMemoryReducer,
    },
});