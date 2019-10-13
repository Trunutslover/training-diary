import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import trainingsReducer from "./trainingsReducer";
import thunkMiddleware from 'redux-thunk';

const reducers = combineReducers({
    trainings: trainingsReducer
});

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(
    applyMiddleware(thunkMiddleware)
));

export default store;