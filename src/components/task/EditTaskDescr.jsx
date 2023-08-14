import { useState } from "react";

export default function EditTaskDescr({ task, addDescr }) {
  const [editDescr, setEditDescr] = useState("");

  return (
    <>
      <textarea
        type="text"
        name="task-decription"
        placeholder="Введите описание задачи"
        className="main__decription-input"
        onChange={(e) => setEditDescr(e.target.value)}
      />
      <button
        className="tasks-block__submit-btn"
        onClick={() => {
          addDescr(editDescr, task);
          setEditDescr("");
        }}
      >
        Edit
      </button>
    </>
  );
}
