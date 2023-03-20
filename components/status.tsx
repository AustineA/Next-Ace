import { format } from "date-fns";
import { useState } from "react";
import styled from "styled-components";

const Status = () => {
  const [day, _] = useState(new Date());
  const currentHour = day.getHours();

  return (
    <StatusPage>
      <span>{format(day, "eeee")}</span>
      <div className="date">{format(day, "dd MMMM")}</div>
      <p>
        {currentHour > 17
          ? "What did you work on today? "
          : "What are working on today?"}
      </p>
    </StatusPage>
  );
};

export default Status;

const StatusPage = styled.div`
  span {
    color: var(--text-accent);
  }

  p {
    font-weight: 200;
  }

  .date {
    font-size: 4rem;
    font-weight: 500;
  }
`;
