import IRoom from "../../models/IRoom.model";

const Room: React.FC<{ room: IRoom }> = ({ room }) => {
  return <div>{room.name}</div>;
};

export default Room;
