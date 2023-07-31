import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";

import photo from "./photo";

const middleware = [thunkMiddleware];
const reducer = combineReducers({ photo });
const store = configureStore({ reducer, middleware });

export default store;
