import { createContext } from "react";

// Контекст для задач бэклога
const TasksContext = createContext({
  tasks: [],
  setTasks: () => {},
});

// Контекст для задач Ready
const ReadyTasksContext = createContext({
  readyTasks: [],
  setReadyTasks: () => {},
});

export { TasksContext, ReadyTasksContext };
