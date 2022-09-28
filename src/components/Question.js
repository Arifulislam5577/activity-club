import React from "react";
import { questions } from "../Database/Data";
const Question = () => {
  return (
    <div className="my-5">
      {questions.map((question) => (
        <figure>
          <h2>{question.title}</h2>
          <p>{question.answer}</p>
        </figure>
      ))}
    </div>
  );
};

export default Question;
