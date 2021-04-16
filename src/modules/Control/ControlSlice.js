'use-strict'
import { createSlice } from '@reduxjs/toolkit'
export const controlSlice = createSlice({
    name: 'Controls',
    initialState: {
        value: [
            {
                id: '0',
                instruction: {
                    op: '',
                    value: '',
                    address: ''
                },
                completed: null

            },
            {
                id: '1',
                instruction: {
                    op: '',
                    value: '',
                    address: ''
                },
                completed: null

            },
            {
                id: '2',
                instruction: {
                    op: '',
                    value: '',
                    address: ''
                },
                completed: null

            },
            {
                id: '3',
                instruction: {
                    op: '',
                    value: '',
                    address: ''
                },
                completed: null

            }
        ]
    },
    reducers: {
        setInstructionTarget: (state, action) => {
            const {id, instruction, completed} = action.payload;
            const control = state.value.find( control =>{
                return control.id === `${id}`;
            });
            control.instruction = instruction;
            control.completed = completed;
        }
    }
})
export const {setInstructionTarget} = controlSlice.actions;
export default controlSlice.reducer;