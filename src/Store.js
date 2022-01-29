import {applyMiddleware, createStore} from "redux";
import rootReducer from "./Reducer/rootReducer";
import {logger} from "redux-logger/src";
import thunk from "redux-thunk";


const Store = createStore(rootReducer,{},applyMiddleware(thunk,logger));

export default Store;