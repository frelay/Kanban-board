import { useState, useContext, useEffect } from "react";
import { TasksContext } from "../../../context/TasksContext";
import TasksSelect from "../../util-components/TasksSelect";
import InProgressBtns from "./InProgressBtns";

export default function InProgress({ blockName }) {
  // Используем контект
  const { inProgressTasks, readyTasks } = useContext(TasksContext);
  // Состояние для контролируемого селекта
  const [selectedTask, setSelectedTask] = useState("");
  // Состояние для видимости дропдауна
  const [isVisible, setVisible] = useState(false);

  // Добавляем задачи в localStorage
  useEffect(() => {
    localStorage.setItem("inProgressTasks", JSON.stringify(inProgressTasks));
  }, [inProgressTasks]);

  return (
    <div className="tasks-block">
      <h2 className="tasks-block__title">{blockName}</h2>
      {/* Рисуем задачи для блока InProgress */}
      {inProgressTasks.length !== 0 && (
        <div className="tasks-block__tasks-wrapper">
          {inProgressTasks.map((task) => (
            <div className="tasks-block__task" key={task.id}>
              {task.title}
            </div>
          ))}
        </div>
      )}
      {/* Рисуем селект для выбора задач из бэклога */}
      {isVisible && (
        <TasksSelect
          tasks={readyTasks}
          selectedTask={selectedTask}
          setSelectedTask={setSelectedTask}
        />
      )}
      {/* Рисуем кнопки */}
      <InProgressBtns
        isVisible={isVisible}
        setVisible={setVisible}
        selectedTask={selectedTask}
        setSelectedTask={setSelectedTask}
      />
    </div>
  );
}
