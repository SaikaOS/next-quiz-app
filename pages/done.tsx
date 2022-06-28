import React from "react";
import HomeButton from "../components/home-button";

interface IDone {
  got: number;
  all: number;
}

function Done({ got, all }: IDone) {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: 'center', height: '100vh' }}
    >
        <h1>Good Job!</h1>
        <p>
          Your score is {got} from {all}
        </p>
        <HomeButton />
    </div>
  );
}

export default Done;
