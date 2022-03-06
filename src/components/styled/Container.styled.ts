import styled from "styled-components";

const Container = styled.div`
  width: 1200px;
  max-width: 80%;
  border: 1px solid ${props => props.theme.border.primary};
  background-color: ${props => props.theme.background.primary};
  margin: 20px auto;
  padding: 20px 0 15px;
  box-sizing: border-box;
`;

export default Container;
