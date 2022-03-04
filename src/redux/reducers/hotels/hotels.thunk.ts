import DispatchFunction from "../../../models/IDispatchFunction.model";
import IHotel from "../../../models/IHotel.model";
import IRoom from "../../../models/IRoom.model";
import hotelsService from "../../../services/hotels.service";
import { errorHandler } from "../error/error.thunk";
import hotelsActions from "./hotels.actions";

export const loadHotelsAsync = () => async (dispatch: DispatchFunction) => {
  dispatch(hotelsActions.hotelsLoadStart());
  try {
    const response = await hotelsService.getAllHotels();
    const hotels = response.data as IHotel[];
    dispatch(hotelsActions.hotelsLoadSuccess(hotels));
    for (const h of hotels) {
      loadHotelRooms(h.id)(dispatch);
    }
  } catch (error: unknown) {
    errorHandler(error)(dispatch);
  }
};

export const loadHotelRooms =
  (id: string) => async (dispatch: DispatchFunction) => {
    dispatch(hotelsActions.hotelRoomsLoadStart(id));
    try {
      const response = await hotelsService.getHotelRooms(id);
      dispatch(
        hotelsActions.hotelRoomsLoadSuccess({
          id,
          rooms: response.data.rooms as IRoom[],
        })
      );
    } catch (error: unknown) {
      errorHandler(error)(dispatch);
    }
  };
