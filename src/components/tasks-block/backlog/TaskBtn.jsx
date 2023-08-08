import SubmitBtn from "../../util-components/SubmitBtn";
import AddBtn from "../../util-components/AddBtn";

export default function TaskBtn({
  setVisible,
  inputText,
  visible,
  addTask,
  tasks,
}) {
  return (
    <>
      {/* Рисуем кнопки исходя из видимости инпута и заполнен ли текст */}
      {visible && inputText ? (
        <SubmitBtn
          taskText={inputText}
          addTask={addTask}
          tasks={tasks}
          setVisible={setVisible}
        />
      ) : (
        <AddBtn setVisible={setVisible} />
      )}
    </>
  );
}
