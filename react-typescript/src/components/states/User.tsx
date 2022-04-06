import React, { useState } from 'react'

type AuthUser = {
  name: string,
  email: string
}

function User(props: AuthUser) {
  const [user, setUser] = useState<AuthUser | null>(null)
  const handleLogin = () => {
    setUser({
      name: 'John',
      email: 'john@gmail.com'
    })
  }
  const handleLogout = () => {
    setUser(null)
  }
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Login</button>
      <div>User Name is {user?.name}</div>
      <div>User Name is {user?.email}</div>
    </div>
  )
}

export default User