import { createContext } from "react";

// Контекст для задач бэклога
const TasksContext = createContext({
  tasks: [],
  setTasks: () => {},
  readyTasks: [],
  setReadyTasks: () => {},
  inProgressTasks: [],
  setInProgressTasks: () => {},
  finishedTasks: [],
  setFinishedTasks: () => {},
});

export { TasksContext };
