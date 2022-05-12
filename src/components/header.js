import styled from "styled-components";

const StyledHeader = styled.header`
  color: white;
  background-color: slategrey;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Barlow", sans-serif;
  font-family: "Fredoka", sans-serif;
  width: 100%;
  padding: 10px 0px;
  margin: 0px 0px 10px 0px; 
`;

const Header = () => {
  return <StyledHeader>STAR WARS STARSHIPS</StyledHeader>;
};

export default Header;
