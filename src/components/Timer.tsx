import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import theme from "../styles/theme";

const Timer = () => {
  const SECOND_IN_MS = 15 * 1000;
  const INTERVAL = 1000;
  const [timeLeft, setTimeLeft] = useState<number>(SECOND_IN_MS);
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev < INTERVAL) {
          return SECOND_IN_MS;
        } else {
          return prev - INTERVAL;
        }
      });
    }, INTERVAL);

    return () => clearInterval(timer);
  }, []);

  const seconds = String(Math.floor(timeLeft / 1000)).padStart(2, "0");
  return <TimerWrapper>00:{seconds}</TimerWrapper>;
};

export default Timer;

const TimerWrapper = styled.div`
  font: ${theme.typography["body3-3"]};
  color: ${theme.color.neutral.B20};
  font-variant-numeric: tabular-nums;
`;
