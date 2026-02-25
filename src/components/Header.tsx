import Logo from "./Logo"

export default function Header() {
  return (
    <header>
      <div className='logo'>
        <Logo />
        <h1>Task Manager</h1>
      </div>
      <p>Stay organized and boost your productivity.</p>
    </header>
  )
}
