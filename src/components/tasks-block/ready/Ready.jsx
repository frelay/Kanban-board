import { useContext, useState } from "react";
import TasksSelect from "./TasksSelect";
import ReadyBtns from "./ReadyBtns";
import { TasksContext, ReadyTasksContext } from "../../../context/TasksContext";
import "../TasksBlock.scss";

export default function Ready({ blockName }) {
  // Используем контект
  const { tasks } = useContext(TasksContext);
  const { readyTasks, setReadyTasks } = useContext(ReadyTasksContext);
  // Состояние для контролируемого селекта
  const [selectedTask, setSelectedTask] = useState("");
  // Состояние для видимости дропдауна
  const [isVisible, setVisible] = useState(false);

  // Функция добавления задачи в массив задач
  function addTaskAtReady(task, tasksArray) {
    const newTasksArray = [...tasksArray, task];
    setReadyTasks(newTasksArray);
  }

  return (
    <div className="tasks-block">
      <h2 className="tasks-block__title">{blockName}</h2>
      {/* Рисуем задачи для блока Ready */}
      <div>{readyTasks}</div>
      {/* Рисуем селект для выбора задач из бэклога */}
      {isVisible && (
        <TasksSelect
          tasks={tasks}
          selectedTask={selectedTask}
          setSelectedTask={setSelectedTask}
        />
      )}
      {/* Рисуем кнопки */}
      <ReadyBtns
        isVisible={isVisible}
        setVisible={setVisible}
        selectedTask={selectedTask}
        readyTasks={readyTasks}
        addReadyTasks={addTaskAtReady}
      />
    </div>
  );
}
