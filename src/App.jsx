import { useState } from "react";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import { TasksContext } from "./context/TasksContext";
import getTasksFromStorage from "./utils/getTasksFromStorage";
import "./App.scss";

function App() {
  // Состояние для списков задач
  const [tasks, setTasks] = useState(getTasksFromStorage("tasks"));
  const [readyTasks, setReadyTasks] = useState(
    getTasksFromStorage("readyTasks")
  );
  const [inProgressTasks, setInProgressTasks] = useState(
    getTasksFromStorage("inProgressTasks")
  );
  const [finishedTasks, setFinishedTasks] = useState(
    getTasksFromStorage("finishedTasks")
  );

  return (
    <TasksContext.Provider
      value={{
        tasks,
        setTasks,
        readyTasks,
        setReadyTasks,
        inProgressTasks,
        setInProgressTasks,
        finishedTasks,
        setFinishedTasks,
      }}
    >
      <div className="App">
        <Header />
        <Main />
        <Footer
          backlogTasks={tasks.length}
          finishedTasks={finishedTasks.length}
        />
      </div>
    </TasksContext.Provider>
  );
}

export default App;
