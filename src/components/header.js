import styled from "styled-components";

const StyledHeader = styled.header`
  color: #ffe81f;
  background-color: #181a18;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 20px 0px;
  font-size: 50px;
  position: fixed;
  top: 0;
  text-align: center;
  z-index: 10;
`;

const Header = () => {
  return <StyledHeader>STAR WARS STARSHIPS</StyledHeader>;
};

export default Header;
