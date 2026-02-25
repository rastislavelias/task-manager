import Header from './components/Header'
import TaskForm from './components/TaskForm'
import TaskFilters from './components/TaskFilters'
import TaskList from './components/TaskList'
import Summary from './components/Summary'
import Footer from './components/Footer'
import { useTasks } from './hooks/useTasks'
import './App.css'

function App() {
  const {
    tasks,
    activeTab,
    setActiveTab,
    filteredTasks,
    addTask,
    deleteTask,
    toggleTaskCompletion
  } = useTasks()

  function handleSubmit(formData: FormData) {
    const text = formData.get('task')
    if (!text || typeof text !== 'string') return
    
    addTask(text)
  }

  return (
    <>
      <Header />
      <main>
        <div className='card'>
          <TaskForm onSubmit={handleSubmit} />
          <TaskFilters
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />
          <TaskList
            filteredTasks={filteredTasks}
            onToggle={toggleTaskCompletion}
            onDelete={deleteTask}
          />
          <Summary
            total={tasks.length}
            completed={tasks.filter(t => t.completed).length}
          />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App
