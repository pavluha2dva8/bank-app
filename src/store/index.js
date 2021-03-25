import {applyMiddleware, combineReducers, createStore} from "redux";
import {cashReduser} from "./cashReducer";
import {clientsReduser} from "./clientsReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    cash: cashReduser,
    clients: clientsReduser
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk))) // second param can be middleware or devtools