import IAction from "../../../models/IAction.model";
import IError from "../../../models/IError.model";
import IErrorState from "../../../models/IErrorState.model";
import errorActionTypes from "./error.actionTypes";
import initialState from "./error.initialState";

const errorReducer = (
  state: IErrorState = initialState,
  { type, payload }: IAction<IError | string>
): IErrorState => {
  switch (type) {
    case errorActionTypes.ERROR_SHOW:
      return {
        ...state,
        errors: [...state.errors, payload as IError],
      };
    case errorActionTypes.ERROR_HIDE:
      const index = state.errors.findIndex((e) => e.id === (payload as string));
      return {
        ...state,
        errors: [
          ...state.errors.slice(0, index),
          ...state.errors.slice(index + 1),
        ],
      };
    default:
      return state;
  }
};

export default errorReducer;
