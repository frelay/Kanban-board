export default function TaskInput({ inputChange, valueText }) {
  return (
    // Компонент для инпута
    <input
      type="text"
      name="task-title"
      placeholder="Введите заголовок задачи"
      className="tasks-block__input"
      value={valueText}
      onChange={(e) => inputChange(e)}
    />
  );
}
