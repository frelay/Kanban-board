export default function TaskInput({ inputChange }) {
  return (
    // Компонент для инпута
    <input
      type="text"
      name="task-title"
      className="tasks-block__input"
      onChange={(e) => inputChange(e)}
    />
  );
}
