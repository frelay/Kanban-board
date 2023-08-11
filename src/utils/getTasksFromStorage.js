// Функция берет данные из localStorage
export default function getTasksFromStorage(tasksArray) {
  const saved = localStorage.getItem(tasksArray);
  const initialValue = JSON.parse(saved);
  return initialValue || "";
}
