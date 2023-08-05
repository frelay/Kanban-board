export default function TasksSelect({ tasks }) {
  console.log(tasks);
  return (
    <select className="tasks-block__select">
      {tasks.map((task) => {
        return <option className="tasks-block__option">{task.title}</option>;
      })}
    </select>
  );
}
