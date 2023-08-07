import { useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";

export default function TasksSelect({ tasks, selectedTask, setSelectedTask }) {
  // Состояние активности селекта
  const [isActive, setIsActive] = useState(false);

  return (
    // Дропдаун
    <div className="tasks-block__select">
      <div
        className="tasks-block__select-btn"
        onClick={(e) => setIsActive(!isActive)}
      >
        {selectedTask ? selectedTask : "Выберите задачу"}
        <RiArrowDownSLine />
      </div>
      {isActive && (
        <div className="tasks-block__select-content">
          {tasks.map((task) => (
            <div
              className="tasks-block__select-item"
              key={task.id}
              onClick={(e) => {
                setSelectedTask(task.title);
                setIsActive(false);
              }}
            >
              {task.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
