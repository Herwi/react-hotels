import { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import IHotel from "../../models/IHotel.model";
import IImage from "../../models/IImage.model";
import IReducer from "../../models/IReducer.model";
import IRoom from "../../models/IRoom.model";
import Filter from "./Filter";
import Hotel from "./Hotel";

interface FilteredHotel {
  hotel: IHotel;
  filteredRooms: IRoom[];
  images: IImage[];
}

const CenterMessage = styled.div`
  width: 100%;
  text-align: center;
  padding: 20px 0;
`;

const Hotels = () => {
  const hotels = useSelector((state: IReducer) => state.hotelsReducer.hotels);
  const [starsFilter, setStarsFilter] = useState(1);
  const [childrenFilter, setChildrenFilter] = useState(0);
  const [adultFilter, setAdultFilter] = useState(0);

  const filteredHotels: FilteredHotel[] = hotels.reduce(
    (filtered: FilteredHotel[], hotel) => {
      if (Number(hotel.starRating) >= starsFilter) {
        const filteredRooms = hotel?.rooms?.filter(
          (r) =>
            r.occupancy.maxAdults >= adultFilter &&
            r.occupancy.maxChildren >= childrenFilter
        );
        if (filteredRooms && filteredRooms.length) {
          let images: IImage[] = [...hotel.images];
          for (const room of filteredRooms) {
            images = [...images, ...room.images];
          }
          filtered.push({ hotel, filteredRooms, images });
        }
      }
      return filtered;
    },
    []
  );

  return (
    <div>
      <Filter
        setStarsFilter={setStarsFilter}
        setChildrenFilter={setChildrenFilter}
        setAdultFilter={setAdultFilter}
        starsFilter={starsFilter}
        childrenFilter={childrenFilter}
        adultFilter={adultFilter}
      />
      {filteredHotels.map((h) => (
        <Hotel
          key={h.hotel.id}
          hotel={h.hotel}
          filteredRooms={h.filteredRooms}
          images={h.images}
        />
      ))}
      {!hotels.length && (
        <CenterMessage>
          There was a problem during loading hotels list.
        </CenterMessage>
      )}
      {hotels.length && !filteredHotels.length && (
        <CenterMessage>
          No rooms available with specified filters.
        </CenterMessage>
      )}
    </div>
  );
};

export default Hotels;
