import { useState, useContext } from "react";
import { TasksContext } from "../../../context/TasksContext";
import TasksSelect from "../../util-components/TasksSelect";
import FinishedBtns from "./FinishedBtns";

export default function Finished({ blockName }) {
  // Используем контект
  const { inProgressTasks, finishedTasks } = useContext(TasksContext);
  // Состояние для контролируемого селекта
  const [selectedTask, setSelectedTask] = useState("");
  // Состояние для видимости дропдауна
  const [isVisible, setVisible] = useState(false);

  return (
    <div className="tasks-block">
      <h2 className="tasks-block__title">{blockName}</h2>
      {/* Рисуем задачи для блока InProgress */}
      {finishedTasks.length !== 0 && (
        <div className="tasks-block__tasks-wrapper">
          {finishedTasks.map((task) => (
            <div className="tasks-block__task" key={task.id}>
              {task.title}
            </div>
          ))}
        </div>
      )}
      {/* Рисуем селект для выбора задач из бэклога */}
      {isVisible && (
        <TasksSelect
          tasks={inProgressTasks}
          selectedTask={selectedTask}
          setSelectedTask={setSelectedTask}
        />
      )}
      {/* Рисуем кнопки */}
      <FinishedBtns
        isVisible={isVisible}
        setVisible={setVisible}
        selectedTask={selectedTask}
        setSelectedTask={setSelectedTask}
      />
    </div>
  );
}
