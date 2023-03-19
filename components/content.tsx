import styled from "styled-components";

const Content = ({ children, top = 0 }) => {
  return (
    <PageContent style={{ paddingTop: top > 0 ? top : 15 }}>
      {children}
    </PageContent>
  );
};

export default Content;

const PageContent = styled.section`
  padding: 1.5rem;
  color: var(--white);
  height: 100%;
`;
