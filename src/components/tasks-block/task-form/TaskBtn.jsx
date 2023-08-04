import SubmitBtn from "../../util-components/SubmitBtn";
import AddBtn from "../../util-components/AddBtn";

export default function TaskBtn({
  onClick,
  inputText,
  visible,
  addTask,
  tasks,
  blockName,
}) {
  return (
    <>
      {/* Рисуем кнопки исходя из видимости инпута и заполнен ли текст */}
      {visible && inputText ? (
        <SubmitBtn
          taskText={inputText}
          addTask={addTask}
          tasks={tasks}
          blockName={blockName}
        />
      ) : (
        <AddBtn onClick={onClick} />
      )}
    </>
  );
}
