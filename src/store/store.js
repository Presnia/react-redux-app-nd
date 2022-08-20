import {createStore, compose, applyMiddleware} from "redux";
import reducer from "./tasks";
import { logger } from "./middlware/logger";
import { thunk } from "./middlware/thunk";

const middlewareEnhancer = applyMiddleware(logger, thunk);

export default function configureStore() {
    return createStore(
        reducer,
        compose(
            middlewareEnhancer,
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
            )
    );
};