import IAction from "../../../models/IAction.model";
import IError from "../../../models/IError.model";
import errorActionTypes from "./error.actionTypes";

const errorShow = (error: IError): IAction<IError> => {
  return {
    type: errorActionTypes.ERROR_SHOW,
    payload: error,
  };
};

const errorHide = (id: string): IAction<string> => {
  return {
    type: errorActionTypes.ERROR_HIDE,
    payload: id,
  };
};

export default {
  errorShow,
  errorHide,
};
