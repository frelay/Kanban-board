import { HiOutlinePlus } from "react-icons/hi";

export default function AddBtn({ onClick }) {
  return (
    // Кнопка добавления
    <button className="tasks-block__add-btn" onClick={() => onClick(true)}>
      <HiOutlinePlus />
      Add card
    </button>
  );
}
