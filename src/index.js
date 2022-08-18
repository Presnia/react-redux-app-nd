import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
    function fn() {
        return 'app';
    }
    function someFn(func) {
        return func();
    }
    return <h1> {someFn(fn)}</h1>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
