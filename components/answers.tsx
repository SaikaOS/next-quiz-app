import React from "react";

interface IAnswers {
  correctAnswer?: string;
  incorrectAnswers?: string[];
  onClick: (event: React.MouseEvent<HTMLInputElement>) => void;
  allAnswers: string[];
}

function Answers({ allAnswers, onClick }: IAnswers) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "40vh",
        padding: "30px 20px",
        background: "black",
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
      }}
    >

      {allAnswers.map((incorrect: string) => (
        <input
          type="submit"
          key={incorrect}
          onClick={onClick}
          value={incorrect}
          style={{
            background: "black",
            color: "white",
            borderRadius: 10,
            padding: "5px 10px",
            cursor: "pointer",
            border: "1px solid gray",
            height: 50,
            minWidth: 250,
          }}
        />
      ))}
    </div>
  );
}

export default Answers;
