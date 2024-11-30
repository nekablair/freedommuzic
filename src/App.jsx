import { useState } from 'react'
import bluemuzicLogo from "./assets/bluemuziclogo.png"
// import reactLogo from '/assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const [name, setName] = useState("")
  const [emailfield, setEmailField] = useState("")
  const [passwordfield, setPasswordField] = useState("")

  const handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value
    setName(values => (values, {value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    alert(`The name you entered was: ${name}`)
  }

  return (
    <>
      <div>
        <a href="#" target="_blank">
          <img src={bluemuzicLogo} className="logo" alt="Freedom Muzic Logo" />
        </a>
      </div>
      <h1>Freedom Muzic</h1>
      <div className="card">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input type="name" name="name" value={name.username} onChange={handleChange}/>
          <label htmlFor="email">Email</label>
          <input type='email' name='email' value={emailfield.email} />
          <label htmlFor="password">Password</label>
          <input type="password" name='password' value={passwordfield.password} />
          <label htmlFor="submit">Login</label>
          <input type="submit" />
        </form>
      </div>
    </>
  )
}

export default App
