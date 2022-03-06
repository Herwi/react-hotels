import styled from "styled-components";

export const Element = styled.div`
  width: 100%;
  padding: 20px;
  border-bottom: 1px solid ${(props) => props.theme.border.secondary};
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;

export const List = styled.div`
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  & ${Element}:nth-child(even) {
    background-color: ${(props) => props.theme.background.even};
  }
  & ${Element}:nth-child(odd) {
    background-color: ${(props) => props.theme.background.odd};
  }
  border-top: 1px solid ${(props) => props.theme.border.secondary};
`;

export const Title = styled.div`
  padding: 15px 25px 30px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;
