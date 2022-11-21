import reduxThunk from "redux-thunk";
import { applyMiddleware, legacy_createStore as createStore } from "redux";
import logger from "redux-logger";
import rootReducer from "./reducers/rootReducer";

const DEV_MODE = "development";
const middlewares = [reduxThunk];

if (DEV_MODE === "development") {
  middlewares.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
