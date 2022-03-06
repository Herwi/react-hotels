import { Dispatch, SetStateAction, useState } from "react";
import styled from "styled-components";

const Stars = styled.div`
  color: ${(props) => props.theme.color.primary};
  font-size: 26px;
`;

const StarsHoverable = styled(Stars)`
  transition: 0.5s;
  opacity: 1;
  &:hover {
    opacity: 0.6;
    cursor: pointer;
  }
`;

export const StarRating: React.FC<{ rating: string }> = ({ rating }) => {
  const stars = Number(rating);
  const arr = [];
  for (let i = 0; i < stars; i++) arr.push(true);
  for (let i = 0; i < 5 - stars; i++) arr.push(false);
  return <Stars>{arr.map((s) => (s ? "★" : "☆"))}</Stars>;
};

const Star: React.FC<{
  hoverId: number;
  setHoverRating: Dispatch<SetStateAction<number>>;
  setStarsFilter: Dispatch<SetStateAction<number>>;
}> = ({ hoverId, setHoverRating, setStarsFilter, children }) => {
  const onHoverHandler = () => setHoverRating(hoverId);
  const onClickHandler = () => setStarsFilter(hoverId);
  return (
    <span onMouseEnter={onHoverHandler} onClick={onClickHandler}>
      {children}
    </span>
  );
};

export const StarRatingFilter: React.FC<{
  rating: number;
  setStarsFilter: Dispatch<SetStateAction<number>>;
}> = ({ rating, setStarsFilter }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [hoverRating, setHoverRating] = useState(5);

  const onMouseEnterHandler = () => setIsHovered(true);
  const onMouseLeaveHandler = () => setIsHovered(false);

  const arr = [];
  for (let i = 0; i < (isHovered ? hoverRating : rating); i++) {
    arr.push(true);
  }
  for (let i = 0; i < 5 - (isHovered ? hoverRating : rating); i++) {
    arr.push(false);
  }

  return (
    <StarsHoverable
      onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}
    >
      {arr.map((s, i) => (
        <Star
          key={i}
          hoverId={i + 1}
          setHoverRating={setHoverRating}
          setStarsFilter={setStarsFilter}
        >
          {s ? "★" : "☆"}
        </Star>
      ))}
    </StarsHoverable>
  );
};
