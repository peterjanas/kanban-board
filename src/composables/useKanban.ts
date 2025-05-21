import { ref, computed } from "vue";
import type { Task } from "../types/Task";

export const tasks = ref<Task[]>([]);

export function useKanban() {
  const todo = computed(() =>tasks.value.filter((task) => task.status === "todo"));
  const inProgress = computed(() =>tasks.value.filter((task) => task.status === "inProgress"));
  const done = computed(() =>tasks.value.filter((task) => task.status === "done"));

  function addTask(task: Task) {
    tasks.value.push(task);
  }

  function updateTask(updatedTask: Task) {
    const index = tasks.value.findIndex((task) => task.id === updatedTask.id);
    if (index !== -1) tasks.value[index] = updatedTask;
  }

  function updateTaskStatus(taskId: number, newStatus: Task["status"]) {
    const task = tasks.value.find((task) => task.id === taskId);
    if (task) task.status = newStatus;
  }

  function deleteTask(taskId: number) {
    tasks.value = tasks.value.filter((task) => task.id !== taskId);
  }

  function reset() {
    tasks.value = [];
  }

  return {
    tasks,
    todo,
    inProgress,
    done,
    addTask,
    updateTaskStatus,
    deleteTask,
    updateTask,
    reset,
  };
}
