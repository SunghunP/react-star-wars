import styled from "styled-components";

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

const Starship = ({ starship }) => {
  return <StyledDiv>{starship.name}</StyledDiv>;
};

export default Starship;