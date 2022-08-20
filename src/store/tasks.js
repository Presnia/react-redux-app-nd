import { createAction } from '@reduxjs/toolkit';

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

function reducer(state, action) {
    switch (action.type) {
        case toUpdate.type: {
            const newArray = [...state];
            const elementIndex = newArray.findIndex(el => el.id === action.payload.id);
            newArray[elementIndex] = {...newArray[elementIndex], ...action.payload}
            return newArray;
        }
        case toDelete.type: {
            return state.filter(el => el.id !== action.payload.id);
        }

        default:
            return state;
    }
}

export default reducer;