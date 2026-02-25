import type { Task } from '../types'

type TaskListItemProps = {
  task: Task
  onToggle: (id: Task['id']) => void
  onDelete: (id: Task['id']) => void
}

export default function TaskListItem({
  task,
  onToggle,
  onDelete
}: TaskListItemProps) {
  const { id, text, completed } = task

  return (
    <li key={id}>
      <input type="checkbox" id={`task-${id}`} onChange={() => onToggle(id)} checked={completed} />
      <label htmlFor={`task-${id}`} className='task'>{text}</label>
      <button type="button" onClick={() => onDelete(id)} aria-label={`Delete task`}>Delete</button>
    </li>
  )
}
