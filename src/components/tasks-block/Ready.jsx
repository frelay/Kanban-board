import { useContext } from "react";
import TaskBtn from "./task-form/TaskBtn";
import TasksSelect from "./task-form/TasksSelect";
import { TasksContext, ReadyTasksContext } from "../../context/TasksContext";
import "./TasksBlock.scss";

export default function Ready({ blockName }) {
  // Используем контекст
  const { tasks } = useContext(TasksContext);
  const { readyTasks, setReadyTasks } = useContext(ReadyTasksContext);

  // Функция добавления задачи в массив задач
  function addTaskAtReady(task, tasksArray) {
    const newTasksArray = [...tasksArray, task];
    setReadyTasks(newTasksArray);
  }

  return (
    <div className="tasks-block">
      <h2 className="tasks-block__title">{blockName}</h2>
      {/* Рисуем селект для выбора задач из бэклога */}
      {tasks.length !== 0 && <TasksSelect tasks={tasks} />}
      {/* Рисуем кнопки */}
      <TaskBtn />
    </div>
  );
}
