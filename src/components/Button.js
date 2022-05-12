import styled from "styled-components";

const StyledButton = styled.button`
  color: white;
  background-color: grey;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Barlow", sans-serif;
  font-family: "Fredoka", sans-serif;
  width: 300px;
  height: 150px;
  padding: 10px;
  margin: 20xp;
  
`;

const Button = (props) => {
  return (
    <div>
      <StyledButton>Display More</StyledButton>
    </div>
  );
};

export default Button;
