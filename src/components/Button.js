import styled from "styled-components";

const StyledButton = styled.button`
  color: #ffe81f;
  background-color: rgba(128, 128, 128, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 100px;
  padding: 10px;
  margin-top: 150px;
  margin-right: 10px;
  margin-left: 10px;
  border-radius: 5px;
  border: none;
  font-size: 30px;
  &:hover {
    transform: scale(1.01, 1.01);
    cursor: pointer;
    border: solid 2px yellow;
  }
  &:disabled {
    background-color: rgb(47, 79, 79, 0.5);
    color: rgba(100, 120, 120, 0.4);
    cursor: not-allowed;
  }
  @media screen and (width < 500px) {
    margin-top: 180px;
    font-size: 25px;
    width: 150px;
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
