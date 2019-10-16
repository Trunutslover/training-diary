import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import trainingsReducer from "./trainingsReducer";
import thunkMiddleware from 'redux-thunk';
import trainingReducer from "./trainingReducer";

const reducers = combineReducers({
    trainings: trainingsReducer,
    training: trainingReducer
});

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(
    applyMiddleware(thunkMiddleware)
));

export default store;