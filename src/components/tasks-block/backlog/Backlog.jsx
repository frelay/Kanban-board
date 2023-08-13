import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TaskInput from "./TaskInput";
import TaskBtn from "./TaskBtn";
import { TasksContext } from "../../../context/TasksContext";
import "../TasksBlock.scss";

export default function Backlog({ blockName }) {
  // Состояние для показа инпута
  const [unvisible, setVisible] = useState(false);
  // Состояние для контролируемого инпута
  const [text, setText] = useState("");
  // Используем контекст
  const { tasks, setTasks } = useContext(TasksContext);

  // Обработчик для контролируемого ввода
  function handleInputChange(e) {
    setText(e.target.value);
  }

  // Функция добавления задачи в массив задач
  function addTaskAtBacklog(task, tasksArray) {
    const newTasksArray = [...tasksArray, task];
    setTasks(newTasksArray);
    setText("");
  }

  // Добавляем задачи в localStorage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    // Компонент для блока задач
    <div className="tasks-block">
      <h2 className="tasks-block__title">{blockName}</h2>
      {/* Рисуем задачи в блоке */}
      {tasks.length !== 0 && (
        <div className="tasks-block__tasks-wrapper">
          {tasks.map((task) => (
            <div className="tasks-block__task" key={task.id}>
              <Link to={task.id} className="tasks-block__link">
                {task.title}
              </Link>
            </div>
          ))}
        </div>
      )}
      {/* Рисуем поле инпута в зависимости от состояния */}
      {unvisible && (
        <TaskInput inputChange={handleInputChange} valueText={text} />
      )}
      {/* Рисуем кнопки */}
      <TaskBtn
        setVisible={setVisible}
        inputText={text}
        visible={unvisible}
        addTask={addTaskAtBacklog}
        tasks={tasks}
      />
    </div>
  );
}
