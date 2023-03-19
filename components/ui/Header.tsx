import styled from "styled-components";

const Header = ({ children }) => {
  return <ToolBar>{children}</ToolBar>;
};

export default Header;

const ToolBar = styled.div`
  min-height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
