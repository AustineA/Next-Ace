import { motion } from "framer-motion";
import styled from "styled-components";

const PageAnimation = ({ children, color, x = "50%", y = "50%" }) => {
  return (
    <Animate
      style={{ background: `var(${color})` }}
      initial={{ clipPath: `circle(5% at ${x} ${y})` }}
      animate={{ clipPath: "circle(75%)" }}
      transition={{
        duration: 0.3,
      }}
    >
      {children}
    </Animate>
  );
};

export default PageAnimation;

const Animate = styled(motion.section)`
  padding: 1.5rem;
  color: var(--text);
  height: 100%;
`;
