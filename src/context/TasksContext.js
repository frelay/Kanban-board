import { createContext } from "react";

// Контекст для задач
const TasksContext = createContext({
  tasks: [],
  setTasks: () => {},
});

export default TasksContext;
