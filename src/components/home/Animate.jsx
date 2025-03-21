import React from "react";
import Moment from "moment";
import { extendMoment } from "moment-range";

const moment = extendMoment(Moment);

const start = new Date("February 06, 2024");
const end = new Date();
const range = moment.range(start, end);
const rangeOfYear = range.diff("years");

const year = new Date().getFullYear();

function Animate() {
  return (
    <div className="slide-content">
      <div className="slide-subtitle">
        <h4></h4>
      </div>
      <div className="slide-title">
        <h1>Happy {rangeOfYear}year Anniversary</h1>
      </div>
      <div className="slide-text">
        <p>6 February {year}</p>
      </div>

      <div className="animation-pulse">
        <div className="animated-circle"></div>
      </div>
    </div>
  );
}

export default Animate;
