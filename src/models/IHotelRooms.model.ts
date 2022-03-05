import IRatePlan from "./IRatePlan.model";
import IRoom from "./IRoom.model";

export default interface IHotelRooms {
  id: string;
  rooms: IRoom[];
  ratePlans: IRatePlan[];
}
