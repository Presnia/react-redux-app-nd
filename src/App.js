import React, { useEffect } from 'react';
import {titleChanged, taskDeleted, completeTask, getTasks} from "./store/tasks";
import {useDispatch, useSelector} from "react-redux";

import s from './App.module.css'

const App = ({ store }) => {
    const state = useSelector((state) => state);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTasks());
    }, [dispatch])

    const changeTitle = (taskId) => {
        dispatch(titleChanged(taskId));
    }

    const deleteTask = (taskId) => {
        dispatch(taskDeleted(taskId));
    }

    return (
        <div className={s.container}>
            <h1>ToDo App</h1>
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
                            className={s.completeBtn}
                            onClick={() => dispatch(completeTask(el.id))}
                        >
                            Complete
                        </button>
                        <button
                            className={s.titleBtn}
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