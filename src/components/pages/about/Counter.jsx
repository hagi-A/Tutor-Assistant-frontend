import React from "react";
import CountUp from "react-countup";
import "./counter.css";

const Counter = ({ value, text }) => {
  return (
    <div className="count_contain">
      <div className="count_up text-slate-200">
        <CountUp
          duration={2}
          delay={1}
          end={value}
          suffix="+"
          enableScrollSpy={true}
        />
      </div>
      <p className="count_label font-light font-sans text-xl text-teal-400 mb-3">{text}</p>
    </div>
  );
};

export default Counter;
