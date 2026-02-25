import TaskListItem from './TaskListItem'
import type { Task } from '../types'

type TaskListProps = {
  filteredTasks: Task[]
  onToggle: (id: Task['id']) => void
  onDelete: (id: Task['id']) => void
}

export default function TaskList({
  filteredTasks,
  onToggle,
  onDelete
}: TaskListProps) {
  return (
    <div className='tasks'>
      {filteredTasks.length === 0
        ? <p role="status" className='empty-state'>No tasks found</p>
        : (
          <ul>
            {filteredTasks.map((task) => (
              <TaskListItem
                key={task.id}
                task={task}
                onToggle={onToggle}
                onDelete={onDelete}
              />
            ))}
          </ul>
        )}
    </div>
  )
}
