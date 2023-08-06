import { useState } from "react";

export default function TasksSelect({ tasks }) {
  // Состояние для контролируемого селекта
  const [selectedTask, setSelectedTask] = useState(tasks[0]?.title);
  console.log(selectedTask);

  return (
    <select
      className="tasks-block__select"
      value={selectedTask}
      onChange={(e) => setSelectedTask(e.target.value)}
    >
      {tasks.map((task) => {
        return (
          <option
            className="tasks-block__option"
            key={task.id}
            value={task.title}
          >
            {task.title}
          </option>
        );
      })}
    </select>
  );
}
