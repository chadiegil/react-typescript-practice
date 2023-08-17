import { useState } from "react"

const LoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLoggedIn = () => {
    setIsLoggedIn(true)
  }
  const handleLogout = () => {
    setIsLoggedIn(false)
  }
  return (
    <div>
      <button onClick={handleLoggedIn}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <h2>User is {isLoggedIn ? "logged in" : "logout"}</h2>
    </div>
  )
}

export default LoggedIn
