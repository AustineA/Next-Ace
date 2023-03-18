import { motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";

const PageAnimation = ({ children, color, x = "50%", y = "50%" }) => {
  const [xAxis, setX] = useState(x);
  const [YAxis, setY] = useState(y);

  const variants = {
    initial: {
      clipPath: `circle(5% at ${x} ${y})`,
    },
    animate: { clipPath: "circle(75%)" },
    exit: { clipPath: `circle(0% at ${xAxis} ${YAxis})` },
  };
  return (
    <Animate
      style={{ background: `var(${color})` }}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{
        duration: 0.3,
      }}
      variants={variants}
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
