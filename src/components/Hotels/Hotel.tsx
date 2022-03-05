import IHotel from "../../models/IHotel.model";
import Room from "./Room";

const Hotel: React.FC<{ hotel: IHotel }> = ({ hotel }) => {
  return (
    <div>
      {hotel.id}
      {hotel.rooms?.map((r) => (
        <Room key={r.id} room={r} />
      ))}
    </div>
  );
};

export default Hotel;
