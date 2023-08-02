import { HiOutlinePlus } from "react-icons/hi";

export default function TaskBtn({ onClick, inputText, visible }) {
  return (
    <>
      {/* Рисуем кнопки исходя из видимости инпута и заполнен ли текст */}
      {visible && inputText ? (
        <button className="tasks-block__submit-btn">Submit</button>
      ) : (
        <button className="tasks-block__add-btn" onClick={() => onClick(true)}>
          <HiOutlinePlus />
          Add card
        </button>
      )}
    </>
  );
}
