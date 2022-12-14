import { createSlice } from '@reduxjs/toolkit';
import todosService from "../services/todos.service";
import { setError } from "./errors";
import { createAction } from "@reduxjs/toolkit";

const initialState = {entities: [], isLoading: true};

const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        received(state, action) {
            state.entities = action.payload;
            state.isLoading = false;
        },
        toUpdate(state, action) {
            const elementIndex = state.entities.findIndex(
                el => el.id === action.payload.id
            );
            state.entities[elementIndex] = {
                ...state.entities[elementIndex],
                ...action.payload};
        },
        toDelete(state, action) {
            state.entities = state.entities.filter(
                el => el.id !== action.payload.id
            );
        },
        loadTasksRequested(state) {
            state.isLoading = true;
        },
        taskRequestFailed(state) {
            state.isLoading = false;
        },
        taskAdded(state, action) {
            state.entities.unshift(action.payload);
        }
    }
});

const taskRequested = createAction('task/taskRequested');

export const { taskAdded, toUpdate, toDelete, received, loadTasksRequested, taskRequestFailed } = taskSlice.actions;
export default taskSlice.reducer;

export const loadTasks = () => async (dispatch) => {
    dispatch(loadTasksRequested());
    try {
        const data = await todosService.fetch();
        dispatch(received(data));
    } catch (error) {
        dispatch(taskRequestFailed());
        dispatch(setError(error.message));
    }
}

export const createTask = (task) => async (dispatch) => {
    dispatch(taskRequested());
    try {
        const data = await todosService.create(task);
        dispatch(taskAdded(data));
    } catch (error) {
        dispatch(taskRequestFailed());
        dispatch(setError(error.message));
    }
}

export function titleChanged(id) {
    return toUpdate({ id, title: `New title for ${id}` });
}

export function taskDeleted(id) {
    return toDelete({id});
}

export const completeTask = (id) => (dispatch) => {
    dispatch(toUpdate({id, completed: true}));
}

export const getTasks = () => (state) => state.tasks.entities;
export const getTasksLoadingStatus = () => (state) => state.tasks.isLoading;