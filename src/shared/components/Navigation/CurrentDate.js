import React from "react";

const CurrentDate = () => {
  const year = new Date().getFullYear();

  return <p>Copyright ⓒ {year}</p>;
};

export default CurrentDate;
