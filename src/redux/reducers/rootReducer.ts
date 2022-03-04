import errorReducer from "./error/error.reducer";
import hotelsReducer from "./hotels/hotels.reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({ errorReducer, hotelsReducer });

export default rootReducer;