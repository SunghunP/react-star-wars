import styled from "styled-components";

const StyledButton = styled.button`
  color: #ffe81f;
  background-color: green;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 100px;
  padding: 10px;
  margin-top: 150px;
  margin-right: 10px;
  margin-left: 10px;
  &:disabled {
    background-color: #d22e2d;
    color: grey;
  }
`;

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = ({ starships, setStarships, getStarships }) => {
  const handleClick = (url) => {
    if (!!url) {
      getStarships(url);
    }
  };

  const checkNull = (str) => {
    if (!!starships) {
      return starships[str] === null ? true : false;
    } else {
      return;
    }
  };

  return (
    <StyledDiv>
      <StyledButton
        disabled={checkNull("previous") ? true : false}
        onClick={() => handleClick(starships.previous)}
      >
        Previous Ships
      </StyledButton>
      <StyledButton
        disabled={checkNull("next") ? true : false}
        onClick={() => handleClick(starships.next)}
      >
        More Ships
      </StyledButton>
    </StyledDiv>
  );
};

export default Button;
