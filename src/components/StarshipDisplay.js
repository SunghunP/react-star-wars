import styled from "styled-components";

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

const StyledDiv = styled.div`
  color: white;
  background-color: grey;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 250px;
  height: 140px;
  padding: 10px;
  border: solid 2px black;
  border-radius: 15px;
  margin: 15px;
`;

const StarshipsDisplay = ({ starships }) => {
  // map the starships object into an array of divs

  // const handleClick = () => {};

  return (
    !!starships && (
      <StyledTopDiv className="StarshipsDisplay">
        {starships.results.map((starship) => (
          <StyledDiv className="Starship">{starship.name}</StyledDiv>
        ))}
      </StyledTopDiv>
    )
  );
};

export default StarshipsDisplay;
