import {combineReducers, createStore} from "redux";
import {counterReducer} from "./counter-reducer";

const rootReducer = combineReducers({
    counterState: counterReducer
})


export const store = createStore(rootReducer)

export type IGlobalState = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store;
