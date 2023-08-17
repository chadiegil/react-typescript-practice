import { useState } from "react"

type AuthUser = {
  name: string
  email: string
}

const User = () => {
  const [user, setUser] = useState<null | AuthUser>(null)
  const handleLoggedIn = () => {
    setUser({
      name: "Chad",
      email: "chad@gmail.com",
    })
  }
  const handleLogout = () => {
    setUser(null)
  }

  return (
    <div>
      <button onClick={handleLoggedIn}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User name is {user?.name}</div>
      <div>User email is {user?.email}</div>
    </div>
  )
}

export default User
