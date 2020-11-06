import React from "react";

function Chart(props) {
  let { mf, etf } = props;
  return (
    <>
      <div className="margin">
        <svg width="100%" height="100%" viewBox="0 0 42 42" className="donut">
          <circle
            className="donut-segment mf"
            cx="21"
            cy="21"
            r="15.91549430918954"
            fill="transparent"
            stroke="#5CBEE5"
            strokeWidth="3"
            strokeDasharray={`${mf} ${100 - mf}`}
            strokeDashoffset="25"
          ></circle>
          <circle
            className="donut-segment etf"
            cx="21"
            cy="21"
            r="15.91549430918954"
            fill="transparent"
            stroke="#B69B44"
            strokeWidth="3"
            strokeDasharray={`${etf} ${100 - etf}`}
            strokeDashoffset={`${100 - mf + 25}`}
          ></circle>
        </svg>
        <div>
          <div className="flex justify-center ac">
            <div className="mf-ind"></div>
            <p>Mutual Fund</p>
          </div>
          <div className="flex justify-center  ac">
            <div className="etf-ind"></div>
            <p>ETFs</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Chart;
