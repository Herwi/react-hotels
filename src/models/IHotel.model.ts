import IFacility from "./IFacility.model";
import IImage from "./IImage.model";
import IPosition from "./IPosition.model";
import IRatePlan from "./IRatePlan.model";
import IRoom from "./IRoom.model";

export default interface IHotel {
  id: string;
  name: string;
  description: string;
  address1: string;
  address2: string;
  postcode: string;
  town: string;
  country: string;
  countryCode: string;
  starRating: string;
  facilities: IFacility[];
  telephone: string;
  email: string;
  images: IImage[];
  checkInHours: string;
  checkInMinutes: string;
  checkOutHours: string;
  checkOutMinutes: string;
  position: IPosition;
  rooms?: IRoom[];
  ratePlans?: IRatePlan[];
}
