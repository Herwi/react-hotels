import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { StarRatingFilter } from "./StarRating";

const Div = styled.div`
  border: 1px solid ${(props) => props.theme.border.primary};
  padding: 10px 15px;
  margin: 20px auto 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 50%;
  max-width: 600px;
`;

const Column = styled.div`
  text-align: center;
  width: 33.33%;
  @media (max-width: 992px) {
    width: 100%;
    padding: 5px 0;
  }
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  margin: 0 5px;
  &:hover {
    cursor: pointer;
  }
`;

const Filter: React.FC<{
  setStarsFilter: Dispatch<SetStateAction<number>>;
  setChildrenFilter: Dispatch<SetStateAction<number>>;
  setAdultFilter: Dispatch<SetStateAction<number>>;
  starsFilter: number;
  childrenFilter: number;
  adultFilter: number;
}> = ({
  setStarsFilter,
  setChildrenFilter,
  setAdultFilter,
  starsFilter,
  childrenFilter,
  adultFilter,
}) => {
  const increaseAdults = () => {
    setAdultFilter((prevState) => prevState + 1);
  };

  const decreaseAdults = () => {
    setAdultFilter((prevState) => Math.max(0, prevState - 1));
  };

  const increaseChildren = () => {
    setChildrenFilter((prevState) => prevState + 1);
  };

  const decreaseChildren = () => {
    setChildrenFilter((prevState) => Math.max(0, prevState - 1));
  };

  return (
    <Div>
      <Column>
        <StarRatingFilter rating={starsFilter} setStarsFilter={setStarsFilter} />
      </Column>
      <Column>
        Adults: <Button onClick={increaseAdults}>+</Button>
        {adultFilter}
        <Button onClick={decreaseAdults}>-</Button>
      </Column>
      <Column>
        Children: <Button onClick={increaseChildren}>+</Button>
        {childrenFilter}
        <Button onClick={decreaseChildren}>-</Button>
      </Column>
    </Div>
  );
};

export default Filter;
