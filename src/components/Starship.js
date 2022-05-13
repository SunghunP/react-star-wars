import styled, { keyframes } from "styled-components";

const StyledDiv = styled.div`
  color: #ffe81f;
  background-color: #000000;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 250px;
  height: 140px;
  padding: 10px;
  border: solid 2px white;
  border-radius: 15px;
  margin: 15px;
  transition: all 0.3s 0s ease-in-out;
  &:hover {
    transform: scale(1.1, 1.1);
    cursor: pointer;
    background-color: #ffe81f;
    color: #000000;
    border: solid 2px grey;
  }
`;

const Starship = ({ starship }) => {
  return (
    <div className="card">
        <StyledDiv className="cardFront" >{starship.name}</StyledDiv>
    </div>
  );
};

export default Starship;
