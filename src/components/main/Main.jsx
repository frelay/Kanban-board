import TasksBlock from "../tasks-block/TasksBlock";
import "./Main.scss";

export default function Main() {
  const blocks = ["Backlog", "Ready", "In Progress", "Finished"];

  return (
    <main className="main">
      {/* Рисуем блоки для задач */}
      <div className="main__tasks-block-wrapper">
        {blocks.map((block, i) => (
          <TasksBlock blockName={block} key={i} />
        ))}
      </div>
    </main>
  );
}
