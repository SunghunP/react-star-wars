import styled from "styled-components";

const StyledButton = styled.button`
  color: white;
  background-color: grey;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 100px;
  padding: 10px;
  margin: 20xp;
`;

const Button = (props) => {
  const handleClick = () => {
    console.log("hi");
  };

  return (
    <div>
      <StyledButton onClick={handleClick}>Display More</StyledButton>
    </div>
  );
};

export default Button;
