import React, { useState } from "react";
import MainButton from "./main-button";

function MainPage() {
  const buttons = ["geography", "history", "music", "science"];
  const wrapper = {
    display: "flex",
    flexDirection: "column" as "column",
    justifyContent: "center",
    alignItems: "center",
    height: "80vh",
  };
  const btnDiv = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridTemplateRows: "1fr 1fr",
    gridGap: 10,
  };
  const title = {
    color: "black",
  };

  return (
    <div style={wrapper}>
      <div>
        <h1 style={title}>Quiz App</h1>
      </div>
      <div style={btnDiv}>
        {buttons.map((button) => (
          <MainButton
            name={button}
            key={button}
          ></MainButton>
        ))}
      </div>
    </div>
  );
}

export default MainPage;
