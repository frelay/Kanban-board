import { RiCloseFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import FillTaskDescr from "./FillTaskDescr";
import EditTaskDescr from "./EditTaskDescr";

export default function TaskView({
  task,
  description,
  setDescription,
  addDescr,
  taskDescription,
}) {
  function handleChange(e) {
    setDescription(e.target.value);
  }

  return (
    // Компонент рисует окно задачи
    <main className="main">
      <div className="main__task-view">
        <h1 className="main__task-title">{task.title}</h1>
        <div className="main__task-description">
          {taskDescription ? (
            <p className="main__task-description-text">{taskDescription}</p>
          ) : (
            <FillTaskDescr
              inputChange={handleChange}
              description={description}
              task={task}
              addDescr={addDescr}
            />
          )}
          {taskDescription && <EditTaskDescr task={task} addDescr={addDescr} />}
        </div>
        <Link to="/" className="main__task-link">
          <RiCloseFill />
        </Link>
      </div>
    </main>
  );
}
