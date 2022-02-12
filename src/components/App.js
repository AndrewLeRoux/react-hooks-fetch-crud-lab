import React, {useState, useEffect} from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([])

  useEffect(() => {
  fetch("http://localhost:4000/questions")
    .then((r) => r.json())
    .then((res) => setQuestions(res));
  }, []);


  function handleAddQuestion(newQuestion){
    setQuestions([...questions, newQuestion])
  }


  function handleDelete(q){
    setQuestions(questions.filter(question => question.id !== q.id))
  }

  function handleUpdate(updatedQuestion){
    const updatedQuestions = questions.map((question) => {
      if (question.id === updatedQuestion.id) {
        return updatedQuestion;
      } else {
        return question;
      }
    });
    setQuestions(updatedQuestions);
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm onAddQuestion = {handleAddQuestion}/> : <QuestionList onUpdateQuestion = {handleUpdate} onDelete={handleDelete} questions ={questions}/>}
    </main>
  );
}

export default App;
