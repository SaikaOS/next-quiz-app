import { InferGetStaticPropsType } from "next";
import React, { MouseEvent, useState } from "react";
import Answers from "../components/answers";
import Category from "../components/category";
import HomeButton from "../components/home-button";
import ProgressBar from "../components/progress-bar";
import Question from "../components/question";
import { randomAnswer } from "../randomAnswer";
import Done from "./done";

interface IAnswers {
  correctAnswer: string;
  incorrectAnswers: string[];
}

interface IQuestion extends IAnswers {
  category: string;
  answers: IAnswers;
  question: string;
  id: string | number;
  arrayNum: number;
}

function Science({
  questions,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [arrayId, setArrayId] = useState<number>(0);
  const [showScore, setShowScore] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);

  function handleClick(e: React.MouseEvent<HTMLInputElement>) {
    const nextQuestion = arrayId + 1;
    setArrayId(nextQuestion);
    if (nextQuestion < questions.length) {
      setArrayId(nextQuestion);
    } else {
      setShowScore(true);
    }
    if (e.currentTarget.value === questions[arrayId].correctAnswer) {
      setScore(score + 1);
    }
  }

  return (
    <div>
      {showScore ? (
        <Done got={score} all={questions.length} />
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            minHeight: 550,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <HomeButton />
            <ProgressBar current={arrayId + 1} total={questions.length} />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              height: "40vh",
              margin: "0 20px",
            }}
          >
            <Question question={questions[arrayId].question} />
            <Category category={questions[arrayId].category} />
          </div>
          <div>
            <Answers
              allAnswers={randomAnswer([questions[arrayId].correctAnswer, ...questions[arrayId].incorrectAnswers])}
              onClick={(e) => handleClick(e)}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    "https://the-trivia-api.com/api/questions?categories=science&limit=5&difficulty=medium"
  );
  const questions: IQuestion[] = await res.json();
  const answers: IAnswers[] = questions;

  return {
    props: {
      questions,
      answers,
    },
  };
};

export default Science;