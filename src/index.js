import React from 'react';
import ReactDOM from 'react-dom/client';
import { compose, pipe } from 'lodash/fp';

const App = () => {
    const x = 2;
    const double = num => num * 2;
    const square = num => num * num;
    const half = num => num / 2;
    const MathCalculate =  compose(square, double);

    return (
        <>
            <h1>{MathCalculate(x)}</h1>
            <h2>{half(MathCalculate(x))}</h2>
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
