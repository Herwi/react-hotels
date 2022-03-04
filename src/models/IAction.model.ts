import { Action } from "redux";
import errorActionTypes from "../redux/reducers/error/error.actionTypes";
import hotelsActionTypes from "../redux/reducers/hotels/hotels.actionTypes";

export default interface IAction<T> extends Action<string> {
  type: hotelsActionTypes | errorActionTypes;
  payload?: T;
}
