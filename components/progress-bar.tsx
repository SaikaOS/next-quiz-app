import React from "react";

interface IProgressBar {
  current: number;
  total: number;
}

function ProgressBar({ current, total }: IProgressBar) {
  const containerStyles = {
    marginRight: 20,
    height: 15,
    width: 150,
    backgroundColor: "#e0e0de",
    borderRadius: 50,
  };

  const fillerStyles = {
    height: "100%",
    width: `${current * 30}px`,
    backgroundColor: "black",
    borderRadius: "inherit",
  };

  const labelStyles = {
    padding: 5,
    color: "black",
    fontWeight: "bold" as "bold",
  };
  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
      </div>
      <div style={{margin: '10px 50px'}}>{`0${current}`} / {`0${total}`}
        <span style={labelStyles}></span></div>
    </div>
  );
}

export default ProgressBar;
