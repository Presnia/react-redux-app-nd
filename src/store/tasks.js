import {createSlice} from '@reduxjs/toolkit';
import todosService from "../services/todos.service";
import {createAction} from "@reduxjs/toolkit";

const initialState = [];

export function titleChanged(id) {
    return toUpdate({ id, title: `New title for ${id}` });
}

export function taskDeleted(id) {
    return toDelete({id});
}

export const completeTask = (id) => (dispatch, getState) => {
    dispatch(toUpdate({id, completed: true}));
}

const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        recived(state, action) {
            return action.payload;
        },
        toUpdate(state, action) {
            const elementIndex = state.findIndex(el => el.id === action.payload.id);
            state[elementIndex] = {...state[elementIndex], ...action.payload};
        },
        toDelete(state, action) {
            return state.filter(el => el.id !== action.payload.id);
        }
    }
});

export const { toUpdate, toDelete, recived } = taskSlice.actions;
export default taskSlice.reducer;

const taskRequested = createAction('task/requested');
const taskRequestFailed = createAction('task/requestFailed');

export const getTasks = () => async (dispatch) => {
    dispatch(taskRequested());
    try {
        const data = await todosService.fetch();
        dispatch(recived(data));
    } catch (error) {
        dispatch(taskRequestFailed(error.message));
    }
}