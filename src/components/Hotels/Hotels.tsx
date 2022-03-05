import { useSelector } from "react-redux";
import IReducer from "../../models/IReducer.model";
import Hotel from "./Hotel";

const Hotels = () => {
  const hotels = useSelector((state: IReducer) => state.hotelsReducer.hotels);
  return (
    <div>
      {hotels.map((h) => (
        <Hotel key={h.id} hotel={h} />
      ))}
    </div>
  );
};

export default Hotels;
