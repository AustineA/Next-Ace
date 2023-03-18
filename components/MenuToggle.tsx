import { motion } from "framer-motion";
import styled from "styled-components";

const Path = (props) => (
  <motion.path
    strokeWidth="2"
    stroke="var(--main-bg)"
    strokeLinecap="round"
    {...props}
  />
);

export const MenuToggle = ({ toggle }) => (
  <Button onClick={toggle}>
    <svg width="20" height="20" viewBox="0 0 22 22">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 4 14 L 17 2.5" },
        }}
      />
      <Path
        d="M 2 7.5 L 20 7.5"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 12.5 L 20 12.5" },
          open: { d: "M 4 2.5 L 17 14" },
        }}
      />
    </svg>
  </Button>
);

const Button = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 3rem;
  right: 1.5rem;
  width: 4rem;
  height: 4rem;
  padding-top: 1rem;
  border-radius: 50%;
  background: var(--primary);
`;
