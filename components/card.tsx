import styled from "styled-components";
import { Squircle } from "corner-smoothing";
import CircularProgress from "./CircularProgress";

const Card = () => {
  return (
    <ProgresCard cornerRadius={30}>
      <div className="card-inner">
        <div>
          <h3>Examen</h3>
          <span>10/10 To be done...</span>
        </div>
        <div>
          <CircularProgress
            size={64}
            strokeWidth={4}
            percentage={62}
            color="var(--text)"
          />
        </div>
      </div>
    </ProgresCard>
  );
};

export default Card;

const ProgresCard = styled(Squircle)`
  min-height: 14rem;
  background: var(--solid-1);
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--text);

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
