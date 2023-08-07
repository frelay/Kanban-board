import { HiOutlinePlus } from "react-icons/hi";

export default function AddBtn({ setVisible }) {
  return (
    // Кнопка добавления
    <button className="tasks-block__add-btn" onClick={() => setVisible(true)}>
      <HiOutlinePlus />
      Add card
    </button>
  );
}
