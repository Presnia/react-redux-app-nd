import {createSlice} from "@reduxjs/toolkit";


const initialState = {entities: []};

const errorSlice = createSlice({
    name: 'error',
    initialState,
    reducers: {
        set(state, action) {
            state.entities.push(action.payload);
        }
    }
})

export default errorSlice;