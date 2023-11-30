import React from "react";

const Square = ({ value, onClick, ...props }) => {
  return (
    <button className="square" onClick={onClick} {...props}>
      {value}
    </button>
  );
};

export default Square;
