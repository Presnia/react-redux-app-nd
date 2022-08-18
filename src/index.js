import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
    const x = 2;
    const double = num => num * 2;
    const square = num => num * num;
    const half = num => num / 2;

    return (
        <>
            <h1>{square(double(x))}</h1>
            <h2>{half(square(double(x)))}</h2>
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
