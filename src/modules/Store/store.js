'use-strict'
import { configureStore } from '@reduxjs/toolkit';
import mainMemoryReducer   from  '../MainMemory/MainMemorySlice';
import cpuReducer from '../CPU/CPUSlice';
import cacheL1Reducer from '../CacheL1/CacheL1Splice';
export default configureStore({
    reducer: {
        RAM: mainMemoryReducer,
        CPUs: cpuReducer,
        CachesL1: cacheL1Reducer,
        CachesL2: null,
    },
});