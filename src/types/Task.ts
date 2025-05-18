export interface Task {
  id: string
  title: string
  description: string
}

export type ColumnType = 'todo' | 'in-progress' | 'done'