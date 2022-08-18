import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
    function someFn() {
        return 'app';
    }
    const fn = someFn();
    return <h1> {fn}</h1>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
