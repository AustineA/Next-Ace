import styled from "styled-components";
const Content = ({ children }) => {
  return <PageContent>{children}</PageContent>;
};

export default Content;

const PageContent = styled.section`
  padding: 1.5rem;
  color: var(--white);
  position: relative;
`;
