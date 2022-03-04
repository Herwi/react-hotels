import IFacility from "./IFacility.model";
import IImage from "./IImage.model";

export default interface IRoom {
  id: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  occupancy: {
    maxAdults: number;
    maxChildren: number;
    maxOverall: number;
  };
  disabledAccess: boolean;
  bedConfiguration: string;
  images: IImage[];
  facilities: IFacility[];
}
