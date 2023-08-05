import { useContext } from "react";
import TaskBtn from "./task-form/TaskBtn";
import TasksSelect from "./task-form/TasksSelect";
import TasksContext from "../../context/TasksContext";
import "./TasksBlock.scss";

export default function Ready({ blockName }) {
  // Используем контекст
  const { tasks, setTasks } = useContext(TasksContext);

  return (
    <div className="tasks-block">
      <h2 className="tasks-block__title">{blockName}</h2>
      <TasksSelect tasks={tasks} />
      <TaskBtn />
    </div>
  );
}
