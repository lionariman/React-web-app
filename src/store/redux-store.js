import { combineReducers, createStore } from "redux";
import dialogsPageReducer from "./dialogsPageReduser";
import usersPageReducer from "./usersPageReducer";
import profilePageReducer from "./profilePageReducer";

let reducers = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer,
    usersPage: usersPageReducer
});

let store = createStore(reducers);

window.store = store; // check store in console

export default store;