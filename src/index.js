import React from 'react';
import ReactDOM from 'react-dom/client';
import { pipe } from 'lodash/fp';

const App = () => {
    const x = 3;
    const double = num => num * 2;
    const square = num => num * num;
    const half = num => num / 2;
    // const divide = (num1, num2) => num1 / num2;
    const divide = (num2) => {
        return function(num1) {
            return num1 / num2;
        }
    }
    const MathCalculate =  pipe(double, square, divide(3));

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
