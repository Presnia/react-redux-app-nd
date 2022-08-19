import React, {useEffect, useState} from 'react';
import * as actions from "./store/actions";
import {initiateStore} from "./store/store";

import s from './App.module.css'

const store = initiateStore();

const App = () => {
    const [state, setState] = useState(store.getState());

    useEffect(() => {
        store.subscribe(() => {
            setState(store.getState());
        });
    }, [state])

    const completeTask = (taskId) => {
        store.dispatch(actions.taskCompleted(taskId));
    }

    const changeTitle = (taskId) => {
        store.dispatch(actions.titleChanged(taskId));
    }

    const deleteTask = (taskId) => {
        store.dispatch(actions.taskDeleted(taskId));
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
                                    el.completed === false ? {color: 'tomato'} : {color: 'lightgreen'}
                                }
                            >
                             {` ${el.completed}`}
                            </span>
                        </p>
                        <button
                            onClick={() => completeTask(el.id)}
                        >
                            Complete
                        </button>
                        <button
                            onClick={() => changeTitle(el.id)}
                        >
                            Change title
                        </button>
                        <button
                            className={s.deleteBtn}
                            onClick={() => deleteTask(el.id)}
                        >
                            Delete
                        </button>
                        <hr />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;