import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
    const x = 2;
    const y = x * 2;
    const z = y * y;

    return <h1>{z}</h1>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
