import React, { useEffect, useRef, useState } from "react";

function Countdown() {
  const [timerDays, setTimerDays] = useState(0);
  const [timerHours, setTimerHours] = useState(0);
  const [timerMinutes, setTimerMinutes] = useState(0);
  const [timerSeconds, setTimerSeconds] = useState(0);

  const interval = useRef(null);

  function calculateTimeLeft() {
    const countdownDate = new Date("02/06/2026").getTime();

    interval.current = setInterval(() => {
      const now = new Date().getTime();
      const difference = countdownDate - now;

      if (difference < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(Math.floor(difference / (1000 * 60 * 60 * 24)));
        setTimerHours(Math.floor((difference / (1000 * 60 * 60)) % 24));
        setTimerMinutes(Math.floor((difference / 1000 / 60) % 60));
        setTimerSeconds(Math.floor((difference / 1000) % 60));
      }
    }, 1000);
  }

  useEffect(() => {
    calculateTimeLeft();
    return () => clearInterval(interval.current); // Cleanup on unmount
  }, []);

  return (
    <section className="countdown-section">
      <div className="countdown-container container">
        <div className="countdown-title">
          <h1>Our next kaadhal anniversary is in</h1>
        </div>

        <ul className="countdown-timer row">
          <li className="col-lg-3">
            <p className="time">{timerDays}</p>
            <p className="time-text">DAYS</p>
          </li>
          <li className="col-lg-3">
            <p className="time">{timerHours}</p>
            <p className="time-text">HOURS</p>
          </li>
          <li className="col-lg-3">
            <p className="time">{timerMinutes}</p>
            <p className="time-text">MINUTES</p>
          </li>
          <li className="col-lg-3">
            <p className="time">{timerSeconds}</p>
            <p className="time-text">SECONDS</p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Countdown;
