import styled, { keyframes } from "styled-components";
import { useState } from "react";

const StyledDiv = styled.div`
  color: #ffe81f;
  background-color: #000000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 300px;
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
  div {
    font-size: 25px;
  }
`;

const Starship = ({ starship }) => {
  const [shown, setShown] = useState(true);

  return (
    <div className="card">
      {shown ? (
        <StyledDiv
          className="card-front"
          onClick={() => {
            setShown(!shown);
          }}
        >
          {starship.name}
        </StyledDiv>
      ) : (
        <StyledDiv
          className="card-back"
          onClick={() => {
            setShown(!shown);
          }}
        >
          <div>Class: {starship.starship_class}</div>
          <div>Cost: {starship.cost_in_credits}</div> 
          <div>Hyperdrive rating:{starship.hyperdrive_rating}</div>
        </StyledDiv>
      )}
    </div>
  );
};

export default Starship;
