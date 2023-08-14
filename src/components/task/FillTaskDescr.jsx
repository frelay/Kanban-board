export default function FillTaskDescr({
  inputChange,
  description,
  task,
  addDescr,
}) {
  // Компонент для редактирования описания задачи
  return (
    <>
      <textarea
        type="text"
        name="task-decription"
        placeholder="Введите описание задачи"
        className="main__decription-input"
        onChange={(e) => inputChange(e)}
      />
      <button
        className="main__decription-submit tasks-block__submit-btn"
        onClick={() => addDescr(description, task)}
      >
        Submit
      </button>
    </>
  );
}
