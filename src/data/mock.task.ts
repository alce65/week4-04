import { Task } from "../models/task";

export const getMockTasks = async () => {
  const tasks = [new Task("Task 1", "Pepe"), new Task("Task 2", "Luisa")];

  tasks[1].isCompleted = true;

  return tasks;
};
