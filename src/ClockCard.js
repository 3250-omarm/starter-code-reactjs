import React from "react";

const ClockCard = ({time,type}) => {
  return (
    <div className="card">
      <div className="left">
        {time}
        <div className="splitter"></div>
      </div>
      <div className="type">{type}</div>
    </div>
  );
};

export default ClockCard;
