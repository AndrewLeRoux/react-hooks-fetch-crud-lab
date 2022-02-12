import React from "react";
import QuestionItem from "./QuestionItem"

function QuestionList({questions, onDelete, onUpdateQuestion}) {


const questionList = questions.map((question) =>{
  return <QuestionItem key ={question.id} question = {question} onDelete ={onDelete} onUpdateQuestion = {onUpdateQuestion}/>
})

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionList}</ul>
    </section>
  );
}

export default QuestionList;
