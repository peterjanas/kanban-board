import { ref } from 'vue'
import type { Task, ColumnType } from '../types/Task'

const nextId = ref(1)

const columns = ref<Record<ColumnType, Task[]>>({
  todo: [],
  inProgress: [],
  done: [],
})

export function useKanban() {
  const addTask = (column: ColumnType, title: string, description: string) => {
    columns.value[column].push({
      id: nextId.value++,
      title,
      description,
    })
  }

  const deleteTask = (column: ColumnType, id: number) => {
    columns.value[column] = columns.value[column].filter(t => t.id !== id)
  }

  return { columns, addTask, deleteTask }
}

