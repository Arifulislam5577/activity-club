import { useEffect, useState } from "react";
import Home from "./pages/Home";
import fetchData from "./utils/fetchData";

function App() {
  const [activities, setActivities] = useState([]);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetchData("Database/activities.json").then((result) =>
      setActivities(result)
    );
    fetchData("Database/questions.json").then((result) => setQuestions(result));
  }, []);
  return <Home activities={activities} questions={questions} />;
}

export default App;
