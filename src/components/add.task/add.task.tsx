import { SyntheticEvent } from "react";
import { Task } from "../../models/task";

export function AddTask() {
  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const task = new Task(
      (form.elements.namedItem("title") as HTMLInputElement).value,
      (form.elements.namedItem("owner") as HTMLInputElement).value
    );
    console.log(task);
  };

  return (
    <form aria-label="form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Titulo</label>
        <input type="text" name="title" id="title" required />
      </div>
      <div>
        <label htmlFor="owner">Responsable</label>
        <input type="text" name="owner" id="owner" />
      </div>
      <button type="submit">Añadir</button>
    </form>
  );
}
