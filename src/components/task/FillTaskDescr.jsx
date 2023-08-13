export default function FillTaskDescr({ inputChange, description, task }) {
  // ТУТ НАДО ПОДУМАТЬ НАД ДОБАВЛЕНИЕМ ОПИСАНИЯ ЗАДАЧИ!

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
        onClick={() =>
          console.log(
            "Task title - " + task.title,
            "Task descr - " + description
          )
        }
      >
        Submit
      </button>
    </>
  );
}
