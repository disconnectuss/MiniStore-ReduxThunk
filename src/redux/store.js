import { createStore, combineReducers, applyMiddleware } from "redux";
import basketReducer from "./reducers/basketReducer";
import productReducer from "./reducers/productReducers";
import thunk from "redux-thunk";


const rootReducer = combineReducers({
    productState: productReducer,
    basketState : basketReducer,
})
 export default createStore(rootReducer, applyMiddleware(thunk))
