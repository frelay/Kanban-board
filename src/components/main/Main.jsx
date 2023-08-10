import Backlog from "../tasks-block/backlog/Backlog";
import Ready from "../tasks-block/ready/Ready";
import InProgress from "../tasks-block/in-progress/InProgress";
import Finished from "../tasks-block/finished/Finished";
import "./Main.scss";

export default function Main() {
  return (
    <main className="main">
      {/* Рисуем блоки для задач */}
      <div className="main__tasks-block-wrapper">
        <Backlog blockName="Backlog" />
        <Ready blockName="Ready" />
        <InProgress blockName="InProgress" />
        <Finished blockName="Finished" />
      </div>
    </main>
  );
}
