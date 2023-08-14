import { useParams } from "react-router-dom";
import { useState } from "react";
import getTasksFromStorage from "../../utils/getTasksFromStorage";
import Header from "../header/Header";
import TaskView from "./TaskView";
import Footer from "../footer/Footer";

export default function Task() {
  const [description, setDescription] = useState("");
  const params = useParams();
  const tasks = getTasksFromStorage("tasks");
  const finishedTasks = getTasksFromStorage("finishedTasks");
  const readyTasks = getTasksFromStorage("readyTasks");
  const inProgressTasks = getTasksFromStorage("inProgressTasks");

  const allTasks = [
    ...tasks,
    ...finishedTasks,
    ...readyTasks,
    ...inProgressTasks,
  ];

  const task = allTasks.find((task) => task.id === params.id);
  const [taskDescription, setTaskDescription] = useState(task.description);

  // Функция для добавления описания задачи
  function addDescr(descr, task) {
    if (tasks.find((i) => i.id === task.id)) {
      const newStorageArr = JSON.parse(localStorage.tasks).map((i) =>
        i.id === task.id ? { ...i, description: descr } : i
      );
      setTaskDescription(descr);
      localStorage.setItem("tasks", JSON.stringify(newStorageArr));
    } else if (finishedTasks.find((i) => i.id === task.id)) {
      const newStorageArr = JSON.parse(localStorage.finishedTasks).map((i) =>
        i.id === task.id ? { ...i, description: descr } : i
      );
      setTaskDescription(descr);
      localStorage.setItem("finishedTasks", JSON.stringify(newStorageArr));
    } else if (readyTasks.find((i) => i.id === task.id)) {
      const newStorageArr = JSON.parse(localStorage.readyTasks).map((i) =>
        i.id === task.id ? { ...i, description: descr } : i
      );
      setTaskDescription(descr);
      localStorage.setItem("readyTasks", JSON.stringify(newStorageArr));
    } else if (inProgressTasks.find((i) => i.id === task.id)) {
      const newStorageArr = JSON.parse(localStorage.inProgressTasks).map((i) =>
        i.id === task.id ? { ...i, description: descr } : i
      );
      setTaskDescription(descr);
      localStorage.setItem("inProgressTasks", JSON.stringify(newStorageArr));
    }
  }

  return (
    // Рисуем страницу для отображения содержимого задачи
    <>
      <Header />
      <TaskView
        task={task}
        description={description}
        setDescription={setDescription}
        addDescr={addDescr}
        taskDescription={taskDescription}
      />
      <Footer
        backlogTasks={tasks.length}
        finishedTasks={finishedTasks.length}
      />
    </>
  );
}
