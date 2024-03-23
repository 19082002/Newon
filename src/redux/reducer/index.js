import obj from "./handle.js"
// import {combineReducers} from 'redux';
import { combineReducers } from '@reduxjs/toolkit'
console.log(obj)
let f1=obj.handle
let f2=obj.wishhandle
const rootReducer = combineReducers({
    f1,
    f2
    // obj.handle,
    // obj.wishhandle(),
})
export default rootReducer;