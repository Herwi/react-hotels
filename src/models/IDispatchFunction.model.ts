import IAction from "./IAction.model";
import IError from "./IError.model";
import IHotel from "./IHotel.model";
import IRoom from "./IRoom.model";

type DispatchFunction = (
  action: IAction<IHotel[] | IRoom[] | void | IError | string | unknown >
) => void;

export default DispatchFunction;
