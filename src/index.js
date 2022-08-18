import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
    const arr = ['some', ' new', ' data'];
    function formatArr(el) {
        return el + ' same,';
    }

    return <h1>{arr.map(formatArr)}</h1>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
