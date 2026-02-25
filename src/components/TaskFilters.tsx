import type { Tab } from '../types'

type TaskFiltersProps = {
  activeTab: Tab['id']
  onTabChange: (tabId: Tab['id']) => void
}

const tabs: Tab[] = [
  { id: 'all', label: 'All' },
  { id: 'active', label: 'Active' },
  { id: 'completed', label: 'Completed' }
]

export default function TaskFilters({
  activeTab,
  onTabChange
}: TaskFiltersProps) {
  return (
    <nav aria-label="Task filter">
      <ul>
        {tabs.map(({ id, label }) => (
          <li key={`tab-${id}`}>
            <button
              type="button"
              className={`tab ${activeTab === id ? 'active' : ''}`}
              onClick={() => onTabChange(id)}
              aria-pressed={activeTab === id}
            >
              {label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
