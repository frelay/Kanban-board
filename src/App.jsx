import { useState } from "react";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import { TasksContext } from "./context/TasksContext";
import "./App.scss";

function App() {
  // Состояние для списка задач
  const [tasks, setTasks] = useState([]);

  return (
    <TasksContext.Provider value={{ tasks, setTasks }}>
      <div className="App">
        <Header />
        <Main />
        <Footer backlogTasks={tasks.length} />
      </div>
    </TasksContext.Provider>
  );
}

export default App;
