import React from "react";
const Question = ({ questions }) => {
  return (
    <div className="my-5">
      <h2 className="text-xl font-bold uppercase my-2 pb-2 border-b">
        Question
      </h2>
      {questions.map((question) => (
        <figure key={question.id} className="my-3">
          <h2 className="bg-white mb-2 p-2 text-sm font-bold border-l-4 border-slate-900">
            {question.title}
          </h2>
          <p className="bg-white p-2 text-sm text-gray-500">
            {question.answer}
          </p>
        </figure>
      ))}
    </div>
  );
};

export default Question;
