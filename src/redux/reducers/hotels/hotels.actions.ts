import IAction from "../../../models/IAction.model";
import IHotel from "../../../models/IHotel.model";
import IHotelRooms from "../../../models/IHotelRooms.model";
import IRoom from "../../../models/IRoom.model";
import hotelsActionTypes from "./hotels.actionTypes";

const hotelsLoadStart = (): IAction<void> => {
  return {
    type: hotelsActionTypes.HOTELS_LOAD_START,
  };
};

const hotelsLoadSuccess = (hotels: IHotel[]): IAction<IHotel[]> => {
  return {
    type: hotelsActionTypes.HOTELS_LOAD_SUCCESS,
    payload: hotels,
  };
};

const hotelRoomsLoadStart = (id: string): IAction<IHotelRooms> => {
  return {
    type: hotelsActionTypes.HOTEL_ROOMS_LOAD_START,
    payload: {id, rooms: []}
  };
};

const hotelRoomsLoadSuccess = (hotelRooms: IHotelRooms): IAction<IHotelRooms> => {
  return {
    type: hotelsActionTypes.HOTEL_ROOMS_LOAD_SUCCESS,
    payload: hotelRooms,
  };
};

export default {
  hotelsLoadStart,
  hotelsLoadSuccess,
  hotelRoomsLoadStart,
  hotelRoomsLoadSuccess,
};
