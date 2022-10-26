import { createStore, CombineReducer, combineReducers } from "redux";

let data = {
    currentUser: {}
};

function userSection(oldData = data, newData) {
    if (newData.type === "User-logged-in") {
        oldData.currentUser = newData.user;
    }
    return { ...oldData };
}

let allSections = combineReducers({ userSection });
let meraStore = createStore(allSections);

export default meraStore;