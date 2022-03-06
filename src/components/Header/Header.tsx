import styled from "styled-components";
import logo from "../../logo.png";

const Img = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Header = () => {
  return (
    <Img>
      <img src={logo} />
    </Img>
  );
};

export default Header;
