import { useEffect, useState } from "react";

type TimePropsType = {
  classNames: string;
};

export default function Time({ classNames }: TimePropsType) {
  const [time, setTime] = useState("00:00 PM");

  function updateTime() {
    const time = new Date().toLocaleString("en-us", {
      "hour12": true,
      "hour": "numeric",
      "minute": "numeric",
    }).toString();

    // console.log(time.split(/[: ]/));
    setTime(time);
  }

  useEffect(() => {
    const date = new Date().toLocaleTimeString("en-US");
    setTime(date);

    const updateTimer = setInterval(updateTime, 1000);

    return function cleanUp() {
      clearInterval(updateTimer);
    };
  });

  return <div className={classNames}>{time}</div>;
}
