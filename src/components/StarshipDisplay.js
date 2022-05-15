import styled from "styled-components";
import Starship from "./Starship";

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: inherit;
  padding: 10px;
  margin: 20xp;
  flex-wrap: wrap;
`;

const StarshipsDisplay = ({ starships, allStarships }) => {
  return (
    !!starships && (
      <StyledDiv className="StarshipsDisplay">
        {starships.results.map((starship) => (
          <Starship starship={starship}></Starship>
        ))}
      </StyledDiv>
    )
  );
};

export default StarshipsDisplay;
