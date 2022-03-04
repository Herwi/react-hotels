import { v4 as uuid } from "uuid";
import { getErrorMessage } from "../../../helpers/error";
import IAction from "../../../models/IAction.model";
import IError from "../../../models/IError.model";
import errorsActions from "../error/error.actions";
import { ERROR_LIFETIME } from "../../../config.json";
import DispatchFunction from "../../../models/IDispatchFunction.model";

export const errorHandler =
  (error: unknown) => (dispatch: DispatchFunction) => {
    let message = getErrorMessage(error);
    let id: string = uuid();
    dispatch(
      errorsActions.errorShow({
        id,
        message,
      })
    );
    setTimeout(() => {
      dispatch(errorsActions.errorHide(id));
    }, ERROR_LIFETIME);
  };
