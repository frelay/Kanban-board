import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TasksSelect from "../../util-components/TasksSelect";
import ReadyBtns from "./ReadyBtns";
import { TasksContext } from "../../../context/TasksContext";
import "../TasksBlock.scss";

export default function Ready({ blockName }) {
  // Используем контект
  const { tasks, readyTasks } = useContext(TasksContext);
  // Состояние для контролируемого селекта
  const [selectedTask, setSelectedTask] = useState("");
  // Состояние для видимости дропдауна
  const [isVisible, setVisible] = useState(false);

  // Добавляем задачи в localStorage
  useEffect(() => {
    localStorage.setItem("readyTasks", JSON.stringify(readyTasks));
  }, [readyTasks]);

  return (
    <div className="tasks-block">
      <h2 className="tasks-block__title">{blockName}</h2>
      {/* Рисуем задачи для блока Ready */}
      {readyTasks.length !== 0 && (
        <div className="tasks-block__tasks-wrapper">
          {readyTasks.map((task) => (
            <div className="tasks-block__task" key={task.id}>
              <Link to={task.id} className="tasks-block__link">
                {task.title}
              </Link>
            </div>
          ))}
        </div>
      )}
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
        setSelectedTask={setSelectedTask}
      />
    </div>
  );
}
