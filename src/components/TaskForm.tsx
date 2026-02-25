
type TaskFormProps = {
  onSubmit: (formData: FormData) => void
}

export default function TaskForm({ onSubmit }: TaskFormProps) {
  return (
    <form action={onSubmit}>
      <div className='input-group'>
        <label htmlFor="task">New Task</label>
        <input id="task" name="task" type="text" maxLength={80} placeholder='Enter a new task...' required />
      </div>
      <button type='submit'>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" aria-hidden viewBox="0 0 256 256"><path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path></svg>
        <span>Add Task</span>
      </button>
    </form>
  )
}
