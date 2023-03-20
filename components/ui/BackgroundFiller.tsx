import styled from "styled-components";

const BackgroundFiller = ({ color, top }) => {
  return (
    <Background
      style={{ height: top + 50, background: `var(${color})` }}
    ></Background>
  );
};

export default BackgroundFiller;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;
