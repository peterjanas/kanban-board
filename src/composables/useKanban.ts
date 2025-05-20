import { ref, computed } from "vue";
import type { Task } from "../types/Task";

const tasks = ref<Task[]>([]);

export function useKanban() {
  const todo = computed(() => tasks.value.filter((t) => t.status === "todo"));
  const inProgress = computed(() => tasks.value.filter((t) => t.status === "inProgress"));
  const done = computed(() => tasks.value.filter((t) => t.status === "done"));

  function addTask(task: Task) {
    tasks.value.push(task);
  }

  function updateTaskStatus(taskId: number, newStatus: Task["status"]) {
    const task = tasks.value.find((t) => t.id === taskId);
    if (task) task.status = newStatus;
  }

  function deleteTask(taskId: number) {
    tasks.value = tasks.value.filter(t => t.id !== taskId)
}

  return { tasks, todo, inProgress, done, addTask, updateTaskStatus, deleteTask };
}
