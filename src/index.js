import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import configureStore from "./store/store";
import App from "./App";

const store = configureStore();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App store={store} />
    </Provider>
);
