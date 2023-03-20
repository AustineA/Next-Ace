import styled from "styled-components";

const Header = ({ children, color, top }) => {
  return (
    <ToolBar style={{ background: `var(${color})`, top }}>{children}</ToolBar>
  );
};

export default Header;

const ToolBar = styled.div`
  min-height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 100;
  position: fixed;
  right: 0;
  left: 0;
  padding: 0 1.5rem;
`;
