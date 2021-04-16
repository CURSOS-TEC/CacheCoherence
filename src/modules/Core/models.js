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
    },
    COHERENCE_STATUS: {
        READ_HIT: 'READ_HIT',
        READ_MISS: 'READ_MISS',
        WRITE_HIT: 'WRITE_HIT',
        WRITE_MISS: 'WRITE_MISS',
    }

};
export default models;
