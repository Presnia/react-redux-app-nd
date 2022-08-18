import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
    const x = 2;
    const double = num => num * 2;
    const square = num => num * num;

    const res = square(double(x));

    return <h1>{res}</h1>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
