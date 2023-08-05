import Backlog from "../tasks-block/Backlog";
import Ready from "../tasks-block/Ready";
import "./Main.scss";

export default function Main() {
  return (
    <main className="main">
      {/* Рисуем блоки для задач */}
      <div className="main__tasks-block-wrapper">
        <Backlog blockName="Backlog" />
        <Ready blockName="Ready" />
      </div>
    </main>
  );
}
