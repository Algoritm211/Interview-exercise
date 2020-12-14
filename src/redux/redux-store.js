import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk'
import {timerReducer} from "./timer-reducer";


const reducers = combineReducers({
  timer: timerReducer
})


const store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store

export default store