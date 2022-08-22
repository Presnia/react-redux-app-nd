import React, { useEffect } from 'react';
import {titleChanged, taskDeleted, completeTask, loadTasks, getTasks, getTasksLoadingStatus} from "./store/tasks";
import {getError} from "./store/errors";
import {useDispatch, useSelector} from "react-redux";

import s from './App.module.css'

const App = () => {
    const state = useSelector(getTasks());
    const isLoading = useSelector(getTasksLoadingStatus());
    const error = useSelector(getError());
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadTasks());
    }, [dispatch])

    const changeTitle = (taskId) => {
        dispatch(titleChanged(taskId));
    }

    const deleteTask = (taskId) => {
        dispatch(taskDeleted(taskId));
    }

    if(isLoading) {
        return <h2>Loading...</h2>
    }
    if(error) {
        return <p>{error}</p>
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