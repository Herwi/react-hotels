import styled from "styled-components";
import IRoom from "../../models/IRoom.model";
import { Element } from "../styled/List.styled";

const Name = styled.div`
  color: ${(props) => props.theme.color.primary};
  font-size: 1.1em;
  font-weight: bold;
`;
const Left = styled.div`
  width: 30%;
  padding-right: 15px;
  @media (max-width: 992px) {
    width: 100%;
    padding-bottom: 15px;
    text-align: center;
  }
`;
const Right = styled.div`
  flex: 1;
`;

const Room: React.FC<{ room: IRoom }> = ({ room }) => {
  return (
    <Element>
      <Left>
        <Name>{room.name}</Name>
        <div>Adults: {room.occupancy.maxAdults}</div>
        <div>Children: {room.occupancy.maxChildren}</div>
      </Left>
      <Right>{room.longDescription}</Right>
    </Element>
  );
};

export default Room;
