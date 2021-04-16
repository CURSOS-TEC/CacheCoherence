'use-strict'
const models = {
    INSTRUCTION_TYPES: {
        CALC: 'CALC',
        WRITE: 'WRITE',
        READ: 'READ'
    },
    CACHE_L1_STATES: {
        MODIFIED: 'M',
        SHARED: 'S',
        INVALID: 'I'
    },
    CACHE_L2_STATES: {
        DIRECTORY_MODIFIED: 'DM',
        DIRECTORY_SHARED: 'DS',
        DIRECTORY_INVALID: 'DI'
    }

};
export default models;
