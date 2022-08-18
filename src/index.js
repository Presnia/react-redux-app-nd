import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
    const [state, setState] = useState({});
    //setState(prevState => ({...prevState, id:'123'})); creating a new object with some new property
    const obj1 = {id: 2};
    //const obj2 = {obj1}; creating a copy of obj1
    const obj2 = {...obj1}; //creating a new object with all the properties of obj1

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
