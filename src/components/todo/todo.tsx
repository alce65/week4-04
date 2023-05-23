import { AddTask } from "../add.task/add.task";
import { AddTask2 } from "../add.task/add.task2";

export default function ToDo() {
  return (
    <section>
      <h2>ToDo List</h2>
      <AddTask></AddTask>
      <br />
      <AddTask2></AddTask2>
    </section>
  );
}
