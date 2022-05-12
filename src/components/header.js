import styled from "styled-components";

const StyledHeader = styled.header`
  color: white;
  background-color: darkgrey;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 20px 0px;
  margin: 0px 0px 10px 0px; 
  font-size: 50px;
`;

const Header = () => {
  return <StyledHeader>STAR WARS STARSHIPS</StyledHeader>;
};

export default Header;
