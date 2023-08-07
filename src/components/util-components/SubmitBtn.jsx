import { v4 } from "uuid";

export default function SubmitBtn({
  taskText,
  addTask,
  tasks,
  blockName,
  setVisible,
}) {
  const task = {
    id: v4(),
    title: taskText,
    blockName: blockName,
  };

  // Кнопка сабмита, так же возвращает массив с задачами
  return (
    <button
      className="tasks-block__submit-btn"
      onClick={() => {
        addTask(task, tasks);
        setVisible(false);
      }}
    >
      Submit
    </button>
  );
}
