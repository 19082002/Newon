import {createStore} from "redux";
import rootReducer from "./reducer";

const state = createStore(rootReducer);
export default state;