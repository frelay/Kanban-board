import { useState } from "react";
import TaskInput from "./task-form/TaskInput";
import TaskBtn from "./task-form/TaskBtn";
import "./TasksBlock.scss";

export default function TasksBlock({ blockName }) {
  // Состояние для показа инпута
  const [unvisible, setVisible] = useState(false);
  // Состояние для контролируемого инпута
  const [text, setText] = useState("");

  // Обработчик для контролируемого ввода
  function handleInputChange(e) {
    setText(e.target.value);
  }

  return (
    // Компонент для блока задач
    <div className="tasks-block">
      <h2 className="tasks-block__title">{blockName}</h2>
      {/* Рисуем поле инпута в зависимости от состояния */}
      {unvisible && <TaskInput inputChange={handleInputChange} />}
      {/* Рисуем кнопки */}
      <TaskBtn onClick={setVisible} inputText={text} visible={unvisible} />
    </div>
  );
}
