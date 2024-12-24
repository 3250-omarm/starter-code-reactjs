import React, { useEffect, useState } from "react";
import ClockCard from "./ClockCard";

const CountDown = () => {
  const [left, setLeft] = useState([
    { type: "days", value: 0 },
    { type: "hours", value: 0 },
    { type: "minutes", value: 0 },
    { type: "seconds", value: 0 },
  ]);

  const targetDate = new Date("2025-06-01");
  useEffect(() => {
    const timer = setInterval(() => {
      const currentTime = new Date();
      const differenceInMl = Math.abs(targetDate - currentTime);
      const diffInDays = Math.floor(differenceInMl / (1000 * 60 * 60 * 24));
      const diffInHours = Math.floor(
        (differenceInMl % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const diffInMinutes = Math.floor(
        (differenceInMl % (1000 * 60 * 60)) / (1000 * 60)
      );
      const diffInSeconds = Math.floor((differenceInMl % (1000 * 60)) / 1000);

      // Update the state while keeping the "type" field intact
      setLeft((prevLeft) =>
        prevLeft.map((item) => {
          switch (item.type) {
            case "days":
              return { ...item, value: diffInDays };
            case "hours":
              return { ...item, value: diffInHours };
            case "minutes":
              return { ...item, value: diffInMinutes };
            case "seconds":
              return { ...item, value: diffInSeconds };
            default:
              return item;
          }
        })
      );
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  return (
    <div className="timeDown">
      <p className="title">هــــــــــــانت ي ميــــري</p>
      <div className="clock">
        {left.map((time, index) => {
          return (
            <>
              <ClockCard time={time.value} key={index} type={time.type} />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default CountDown;
