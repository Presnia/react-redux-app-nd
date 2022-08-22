import reducer from "./tasks";
import { logger } from "./middlware/logger";
import {configureStore} from "@reduxjs/toolkit";

export default function createStore() {
    return configureStore({
        reducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
        devTools: process.env.NODE_ENV !== 'production',
    }
)}

// reducer,
//     compose(
//         middlewareEnhancer,
//         window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// )