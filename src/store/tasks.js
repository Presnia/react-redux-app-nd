import {createSlice} from '@reduxjs/toolkit';

const initialState = [
    {id: 1, title:'Task 1', completed: false},
    {id: 2, title:'Task 2', completed: false},
    {id: 3, title:'Task 3', completed: false},
];

export function taskCompleted(id) {
    return toUpdate({id, completed: true});
}

export function titleChanged(id) {
    return toUpdate({ id, title: `New title for ${id}` });
}

export function taskDeleted(id) {
    return toDelete({id});
}

const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        toUpdate(state, action) {
            const elementIndex = state.findIndex(el => el.id === action.payload.id);
            state[elementIndex] = {...state[elementIndex], ...action.payload};
        },
        toDelete(state, action) {
            return state.filter(el => el.id !== action.payload.id);
        }
    }
});

export const { toUpdate, toDelete } = taskSlice.actions;
export default taskSlice.reducer;