import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import trainingsReducer from "./trainingsReducer";
import thunkMiddleware from 'redux-thunk';
import trainingReducer from "./trainingReducer";
import profileReducer from "./profileReducer";
import authReducer from "./authReducer";

const reducers = combineReducers({
    trainings: trainingsReducer,
    training: trainingReducer,
    profile: profileReducer,
    auth: authReducer
});

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(
    applyMiddleware(thunkMiddleware)
));

export default store;