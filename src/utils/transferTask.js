// Функция переводит задачу из одного блока в другой
function transferTask(task, fromArray, toArray, setFrom, setTo) {
  setTo([...toArray, task]);
  setFrom(fromArray.filter((item) => item.id !== task.id));
}

export default transferTask;
