import { useContext } from "react";
import { HiOutlinePlus } from "react-icons/hi";
import { TasksContext } from "../../../context/TasksContext";
import transferTask from "../../../utils/transferTask";

export default function InProgressBtns({
  isVisible,
  setVisible,
  selectedTask,
  setSelectedTask,
}) {
  const { inProgressTasks, readyTasks, setReadyTasks, setInProgressTasks } =
    useContext(TasksContext);

  return (
    <>
      {/* Тут такая логика - если задач нет в бэклоге, то кнопка неактивна */}
      {readyTasks.length === 0 ? (
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
          // По сабмиту переводим из одного массива задач в другой
          onClick={() => {
            transferTask(
              selectedTask,
              readyTasks,
              inProgressTasks,
              setReadyTasks,
              setInProgressTasks
            );
            // Убираем выбраную задачу из поля выбора
            setSelectedTask("");
            setVisible(false);
          }}
        >
          Submit
        </button>
      )}
    </>
  );
}
