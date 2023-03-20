import { motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";

const PageAnimation = ({ children, color, x = "50%", y = "50%", top }) => {
  const [xAxis, setX] = useState(x);
  const [YAxis, setY] = useState(y);

  const variants = {
    initial: {
      clipPath: `circle(5% at ${x} ${y})`,
    },
    animate: { clipPath: "circle(75%)" },
    exit: {
      // clipPath: `circle(20% at ${xAxis} ${YAxis})`,
      // opacity: 0,
      // transition: {
      //   duration: 0.2,
      // },
    },
  };
  return (
    <Animate
      style={{ background: `var(${color})`, paddingTop: top > 0 ? top : 15 }}
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
  color: var(--main-bg);
  height: 100%;
`;
