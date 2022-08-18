import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {

    function someFn() {
        return function() {
            return 'app';
        }
    }
    function fn(func) {
        return func();
    }

    return <h1> {fn(someFn())} </h1>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
