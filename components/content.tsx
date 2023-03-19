import { statusBarHeight } from "@/services/helper";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Content = ({ children }) => {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    statusBarHeight().then((h) => {
      setHeight(h);
    });
  }, []);

  return <PageContent style={{ paddingTop: height }}>{children}</PageContent>;
};

export default Content;

const PageContent = styled.section`
  padding: 1.5rem;
  color: var(--white);
  height: 100%;
  position: relative;
`;
