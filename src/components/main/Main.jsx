import TasksBlock from "../tasks-block/TasksBlock";
import "./Main.scss";

export default function Main() {
  return (
    <main className="main">
      {/* Рисуем блоки для задач */}
      <div className="main__tasks-block-wrapper">
        <TasksBlock blockName="Backlog" />
      </div>
    </main>
  );
}
