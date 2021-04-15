'use-strict'
import { configureStore } from '@reduxjs/toolkit';
import mainMemoryReducer   from  '../MainMemory/MainMemorySlice';
import cpuReducer from '../CPU/CPUSlice';
export default configureStore({
    reducer: {
        RAM: mainMemoryReducer,
        CPUs: cpuReducer,
        CachesL1: null,
        CachesL2: null,
    },
});