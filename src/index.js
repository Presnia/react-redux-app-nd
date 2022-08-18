import React from 'react';
import ReactDOM from 'react-dom/client';

function createStore(initialState) {
    let state = initialState;

    const getState = () => state;
    return { getState };
}
const store = createStore([{id: 1, description:'Task 1', completed: false}])

const App = () => {
    store.getState();
    console.log(store.getState())
    return (
        <>
            <h1>App</h1>
            <h2>Something about app</h2>
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
