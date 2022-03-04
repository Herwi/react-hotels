import IAction from "../../../models/IAction.model";
import IHotel from "../../../models/IHotel.model";
import IHotelRooms from "../../../models/IHotelRooms.model";
import IHotelState from "../../../models/IHotelsState.model";
import hotelsActionTypes from "./hotels.actionTypes";
import initialState from "./hotels.initialState";

const hotelsReducer = (
  state: IHotelState = initialState,
  { type, payload }: IAction<IHotel[] | IHotelRooms | string>
): IHotelState => {
  switch (type) {
    case hotelsActionTypes.HOTELS_LOAD_START:
      return {
        ...state,
        hotels: [],
      };
    case hotelsActionTypes.HOTELS_LOAD_SUCCESS:
      return {
        ...state,
        hotels: payload as IHotel[],
      };
    case hotelsActionTypes.HOTEL_ROOMS_LOAD_START:
    case hotelsActionTypes.HOTEL_ROOMS_LOAD_SUCCESS:
      const hotelRooms = payload as IHotelRooms;
      const index = state.hotels.findIndex((h) => h.id === hotelRooms.id);
      return {
        ...state,
        hotels: [
          ...state.hotels.slice(0, index),
          { ...state.hotels[index], rooms: hotelRooms.rooms },
          ...state.hotels.slice(index + 1),
        ],
      };
    default:
      return state;
  }
};

export default hotelsReducer;
