import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { logger } from "./middlware/logger";
import errorReducer from "./errors";
import reducer from "./tasks";

const rootReducer = combineReducers({
    errors: errorReducer,
    tasks: reducer,
});

export default function createStore() {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
        devTools: process.env.NODE_ENV !== 'production',
    }
)}

// reducer,
//     compose(
//         middlewareEnhancer,
//         window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// )