import { createAction, createReducer } from '@reduxjs/toolkit';

const initialState = [
    {id: 1, title:'Task 1', completed: false},
    {id: 2, title:'Task 2', completed: false},
    {id: 3, title:'Task 3', completed: false},
];

const toUpdate = createAction('task/updated');
const toDelete = createAction('task/deleted');

export function taskCompleted(id) {
    return toUpdate({id, completed: true});
}

export function titleChanged(id) {
    return toUpdate({ id, title: `New title for ${id}` });
}

export function taskDeleted(id) {
    return toDelete({id});
}

const reducer = createReducer(initialState, (builder) => {
    builder
        .addCase(toUpdate, (state, action) => {
            const elementIndex = state.findIndex(el => el.id === action.payload.id);
            state[elementIndex] = {...state[elementIndex], ...action.payload}
        })
        .addCase(toDelete, (state, action) => {
            return state.filter(el => el.id !== action.payload.id);
        })
});

export default reducer;