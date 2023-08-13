import { useParams } from "react-router-dom";
import getTasksFromStorage from "../../utils/getTasksFromStorage";
import Header from "../header/Header";
import TaskView from "./TaskView";
import Footer from "../footer/Footer";

export default function Task() {
  const params = useParams();
  const tasks = getTasksFromStorage("tasks");
  const finishedTasks = getTasksFromStorage("finishedTasks");
  const readyTasks = getTasksFromStorage("readyTasks");
  const inProgressTasks = getTasksFromStorage("inProgressTasks");

  const task = [
    ...tasks,
    ...finishedTasks,
    ...readyTasks,
    ...inProgressTasks,
  ].find((task) => task.id === params.id);

  return (
    // Рисуем страницу для отображения содержимого задачи
    <>
      <Header />
      <TaskView task={task} />
      <Footer
        backlogTasks={tasks.length}
        finishedTasks={finishedTasks.length}
      />
    </>
  );
}
