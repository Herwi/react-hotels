import IErrorState from "./IErrorState.model";
import IHotelState from "./IHotelsState.model";

export default interface IReducer {
  errorReducer: IErrorState;
  hotelsReducer: IHotelState;
}
