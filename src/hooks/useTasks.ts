import { useEffect, useMemo, useState } from 'react'
import type { Task, Tab } from '../types'

export function useTasks() {
  const [activeTab, setActiveTab] = useState<Tab['id']>('all')
  const [tasks, setTasks] = useState<Task[]>(() => {
    const saved = localStorage.getItem('tasks')
    return saved ? JSON.parse(saved) as Task[] : []
  })

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  function addTask(text: string) {
    const task: Task = {
      id: Date.now(),
      text,
      completed: false
    }

    setTasks(prev => [...prev, task])
  }

  function deleteTask(id: number) {
    setTasks(prev => prev.filter(task => task.id !== id))
  }

  function toggleTaskCompletion(id: number) {
    setTasks(prev =>
      prev.map(task =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    )
  }

  const filteredTasks = useMemo(() => {
    return tasks.filter(task => {
      if (activeTab === 'active') return !task.completed
      if (activeTab === 'completed') return task.completed
      return true
    })
  }, [tasks, activeTab])

  return {
    tasks,
    activeTab,
    setActiveTab,
    filteredTasks,
    addTask,
    deleteTask,
    toggleTaskCompletion
  }
}
