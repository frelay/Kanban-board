import { RiCloseFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import FillTaskDescr from "./FillTaskDescr";
import { useState } from "react";

export default function TaskView({ task }) {
  const [description, setDescription] = useState("");

  function handleChange(e) {
    setDescription(e.target.value);
  }

  return (
    <main className="main">
      <div className="main__task-view">
        <h1 className="main__task-title">{task.title}</h1>
        <div className="main__task-description">
          {task.description ? (
            task.description
          ) : (
            <FillTaskDescr
              inputChange={handleChange}
              description={description}
              task={task}
            />
          )}
        </div>
        <Link to="/" className="main__task-link">
          <RiCloseFill />
        </Link>
      </div>
    </main>
  );
}
