import apiClient from "../helpers/apiClient";

class HotelsService {
  getAllHotels = () => apiClient().get("hotels?collection-id=OBMNG");
  getHotelRooms = (id: string) => apiClient().get(`roomRates/OBMNG/${id}`);
}

export default new HotelsService();
