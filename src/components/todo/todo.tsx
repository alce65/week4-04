import { AddTask } from "../add.task/add.task";
import { AddTask2 } from "../add.task/add.task2";
import { CardTask } from "../card.task/card.task";
import { useTasks } from "../../hooks/use.tasks";
import { useContext } from "react";
import { AppContext } from "../../context/app.context";
export default function ToDo() {
  const { tasks, handleAdd, handleDelete, handleUpdate } = useTasks();
  const { sample } = useContext(AppContext);

  return (
    <section>
      <h2>ToDo List</h2>
      <p>{sample}</p>
      <AddTask handleAdd={handleAdd}></AddTask>
      <br />
      <AddTask2 handleAdd={handleAdd}></AddTask2>
      <br />
      <ul>
        {tasks.map((item) => (
          <CardTask
            item={item}
            key={item.id}
            handleUpdate={handleUpdate}
            handleDelete={handleDelete}
          ></CardTask>
        ))}
      </ul>
    </section>
  );
}
