'use-strict'
import { configureStore } from '@reduxjs/toolkit';
import mainMemoryReducer   from  '../MainMemory/MainMemorySlice';
import cpuReducer from '../CPU/CPUSlice';
import cacheL1Reducer from '../CacheL1/CacheL1Slice';
import controlReducer  from '../Control/ControlSlice';
import cacheL2Reducer from '../CacheL2/CacheL2Slice';
export default configureStore({
    reducer: {
        RAM: mainMemoryReducer,
        CPUs: cpuReducer,
        Controls: controlReducer,
        CachesL1: cacheL1Reducer,
        CacheL2: cacheL2Reducer,
    },
});