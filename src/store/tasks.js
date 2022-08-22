import { createSlice } from '@reduxjs/toolkit';
import todosService from "../services/todos.service";

const initialState = {entities: [], isLoading: true, error: null};

export function titleChanged(id) {
    return toUpdate({ id, title: `New title for ${id}` });
}

export function taskDeleted(id) {
    return toDelete({id});
}

export const completeTask = (id) => (dispatch) => {
    dispatch(toUpdate({id, completed: true}));
}

const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        received(state, action) {
            state.entities = action.payload;
            state.isLoading = false;
        },
        toUpdate(state, action) {
            const elementIndex = state.entities.findIndex(el => el.id === action.payload.id);
            state.entities[elementIndex] = {
                ...state.entities[elementIndex],
                ...action.payload};
        },
        toDelete(state, action) {
            return state.entities.filter(el => el.id !== action.payload.id);
        },
        taskRequested(state) {
            state.isLoading = true;
        },
        taskRequestFailed(state, action) {
            state.error = action.payload;
            state.isLoading = false;
        }
    }
});

export const { toUpdate, toDelete, received, taskRequestFailed, taskRequested } = taskSlice.actions;
export default taskSlice.reducer;

export const getTasks = () => async (dispatch) => {
    dispatch(taskRequested());
    try {
        const data = await todosService.fetch();
        dispatch(received(data));
    } catch (error) {
        dispatch(taskRequestFailed(error.message));
    }
}