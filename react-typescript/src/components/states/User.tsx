import React, { useState } from 'react'

type AuthUser = {
  name: string,
  email: string
}

function User() {
  const [user, setUser] = useState<AuthUser | null>({} as AuthUser)
  const handleLogin = () => {
    setUser({
      name: 'John',
      email: 'john@gmail.com'
    })
  }
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <div>User Name is {user?.name}</div>
      <div>User Name is {user?.email}</div>
    </div>
  )
}

export default User