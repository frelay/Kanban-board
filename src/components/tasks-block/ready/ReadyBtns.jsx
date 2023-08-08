import { useContext } from "react";
import { HiOutlinePlus } from "react-icons/hi";
import { TasksContext } from "../../../context/TasksContext";
import transferTask from "../../../utils/transferTask";

export default function ReadyBtns({
  isVisible,
  setVisible,
  selectedTask,
  setSelectedTask,
}) {
  // Используем контекст
  const { tasks, setTasks, readyTasks, setReadyTasks } =
    useContext(TasksContext);

  return (
    <>
      {/* Тут такая логика - если задач нет в бэклоге, то кнопка неактивна */}
      {tasks.length === 0 ? (
        <button className="tasks-block__add-btn_disabled" disabled={!isVisible}>
          <HiOutlinePlus />
          Add card
        </button>
      ) : !selectedTask ? (
        // Если задачи в бэклоге, делаем видимым дропдаун при нажатии на кнопку "добавить"
        <button
          className="tasks-block__add-btn"
          onClick={() => setVisible(true)}
        >
          <HiOutlinePlus />
          Add card
        </button>
      ) : (
        // Если выбрали задачу из дропдауна отображаем кнопку Submit
        <button
          className="tasks-block__submit-btn"
          onClick={() => {
            transferTask(
              selectedTask,
              tasks,
              readyTasks,
              setTasks,
              setReadyTasks
            );
            setSelectedTask("");
          }}
        >
          Submit
        </button>
      )}
    </>
  );
}
