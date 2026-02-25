export type Tab = {
  id: 'all' | 'active' | 'completed'
  label: string
}

export type Task = {
  id: number
  text: string
  completed: boolean
}
