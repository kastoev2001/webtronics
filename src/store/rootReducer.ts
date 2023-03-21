import { combineReducers } from "@reduxjs/toolkit";
import { NameSpace } from "../const";
import userProcess from "./user/user-process";

const rootReducer = combineReducers({
    [NameSpace.USER]: userProcess.reducer,
});

export default rootReducer;