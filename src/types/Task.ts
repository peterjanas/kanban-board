export interface Task {
  id: number
  title: string
  description: string
}

export type ColumnType = 'todo' | 'inProgress' | 'done'