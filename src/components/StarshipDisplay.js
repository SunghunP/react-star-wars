import styled from "styled-components";
import Starship from "./Starship";

const StyledTopDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: inherit;
  padding: 10px;
  margin: 20xp;
  flex-wrap: wrap;
`;

const StarshipsDisplay = ({ starships }) => {
  // map the starships object into an array of divs

  // const handleClick = () => {};

  return (
    !!starships && (
      <StyledTopDiv className="StarshipsDisplay">
        {starships.results.map((starship) => (
          <Starship starship={starship}>
          </Starship>
        ))}
      </StyledTopDiv>
    )
  );
};

export default StarshipsDisplay;
