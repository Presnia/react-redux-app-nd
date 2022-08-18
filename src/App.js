import React, {useEffect, useState} from 'react';
import createStore from "./store/createStore";
import taskReducer from "./store/taskReducer";
import * as actions from "./store/actionTypes";

import s from './App.module.css'

const initialState = [
    {id: 1, title:'Task 1', completed: false},
    {id: 2, title:'Task 2', completed: false}
];

const store = createStore(taskReducer, initialState);

const App = () => {
    const [state, setState] = useState(store.getState());

    useEffect(() => {
        store.subscribe(() => {
            setState(store.getState());
        });
    }, [state])

    const handleTask = (taskId) => {
        store.dispatch({
            type: actions.taskUpdated,
            payload: { id: taskId, completed: true},
        });
    }

    const changeTitle = (taskId) => {
        store.dispatch({
            type: actions.taskUpdated,
            payload: { id: taskId, title: `New title for ${taskId}` },
        });
    }

    return (
        <div className={s.container}>
            <h1>App</h1>
            <ul>
                {state.map(el => (
                    <li key={el.id}>
                        <p className={s.title}>{el.title}</p>
                        <p>
                            Completed:
                            <span
                                style={
                                    el.completed === false ? {color: 'red'} : {color: 'lightgreen'}
                                }
                            >
                             {` ${el.completed}`}
                            </span>
                        </p>
                        <button
                            onClick={() => handleTask(el.id)}
                        >
                            Complete
                        </button>
                        <button
                            onClick={() => changeTitle(el.id)}
                        >
                            Change title
                        </button>
                        <hr />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;