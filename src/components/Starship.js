import styled, { keyframes } from "styled-components";

// const rotate = keyframes`
//   from {
//     transform: rotate(0deg);
//   }
//   to {
//     transform: rotate(360deg);
//   }
// `;

const StyledDiv = styled.div`
  color: white;
  background-color: slategrey;
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
  transition: all .3s 0s ease-in-out;
  &:hover {
    transform: scale(1.1, 1.1);
    cursor: pointer;
    background-color: #b4f8c8;
    color: black;
  }
`;

// animation: ${rotate} 10s linear infinite;

const Starship = ({ starship }) => {
  return <StyledDiv>{starship.name}</StyledDiv>;
};

export default Starship;