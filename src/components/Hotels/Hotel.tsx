import IHotel from "../../models/IHotel.model";
import Container from "../styled/Container.styled";
import Room from "./Room";
import { List, Title } from "../styled/List.styled";
import SimpleImageSlider from "react-simple-image-slider";
import styled from "styled-components";
import { StarRating } from "./StarRating";
import IRoom from "../../models/IRoom.model";
import IImage from "../../models/IImage.model";

const Left = styled.div`
  width: 225px;
  @media (max-width: 768px) {
    width: 100%;
    & :nth-child(1) {
      margin: 0 auto !important;
      display: flex !important;
    }
    padding-bottom: 25px;
  }
`;

const Info = styled.div``;
const Stars = styled.div`
  flex: 1;
  text-align: right;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: row-reverse;
    & > ${Info}, & > ${Stars} {
      width: 100%;
      text-align: center;
    }
  }
`;

const Name = styled.div`
  color: ${(props) => props.theme.color.primary};
  font-size: 1.4em;
  font-weight: bold;
`;

const Hotel: React.FC<{
  hotel: IHotel;
  filteredRooms: IRoom[];
  images: IImage[];
}> = ({ hotel, filteredRooms, images }) => {
  return (
    <Container>
      <Title>
        <Left>
          <SimpleImageSlider
            width={200}
            height={200}
            images={images}
            showBullets={false}
            showNavs={hotel.images.length > 1 ? true : false}
            navSize={50}
            navMargin={5}
          />
        </Left>
        <Right>
          <Info>
            <Name>{hotel.name}</Name>
            <div>{hotel.address1}</div>
            <div>{hotel.address2}</div>
          </Info>
          <Stars>
            <StarRating rating={hotel.starRating} />
          </Stars>
        </Right>
      </Title>
      <List>
        {filteredRooms?.map((r) => (
          <Room key={r.id} room={r} />
        ))}
      </List>
    </Container>
  );
};

export default Hotel;
