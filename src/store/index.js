import {combineReducers, createStore} from "redux";
import {cashReduser} from "./cashReducer";
import {clientsReduser} from "./clientsReducer";
import {composeWithDevTools} from "redux-devtools-extension";

const rootReducer = combineReducers({
    cash: cashReduser,
    clients: clientsReduser
})

export const store = createStore(rootReducer, composeWithDevTools()) // second param can be middleware or devtools