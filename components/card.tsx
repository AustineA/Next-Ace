import styled from "styled-components";
import { Squircle } from "corner-smoothing";
import CircularProgress from "./CircularProgress";
import { motion } from "framer-motion";

const Card = ({ percentDone = 0, title, done, total, color, openTask }) => {
  return (
    <ProgresCard
      cornerRadius={30}
      style={{ background: `var(${color})` }}
      whileTap={{
        scale: 0.97,
        opacity: 0.9,
      }}
      onClick={openTask}
    >
      <div className="card-inner">
        <div>
          <h3>{title}</h3>
          <span>
            {done}/{total} To be done...
          </span>
        </div>
        <div>
          <CircularProgress
            size={64}
            strokeWidth={4}
            percentage={percentDone}
            color="var(--main-bg)"
          />
        </div>
      </div>
    </ProgresCard>
  );
};

export default Card;

const ProgresCard = styled(motion(Squircle))`
  min-height: 14rem;
  background: var(--solid-1);
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--text);
  margin-bottom: 2rem;

  .card-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 0 3rem;
  }

  h3 {
    margin: 0;
    font-weight: 500;
    font-size: 2.2rem;
  }

  span {
    font-size: 1.4rem;
  }
`;
