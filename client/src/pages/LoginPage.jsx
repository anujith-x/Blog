import React, { useState } from 'react'

const LoginPage = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  return (
    <div>
      <form action="" className='login'>
        <h1>Login</h1>
        <input type="text" placeholder='username' onChange={ev=> setUsername(ev.target.value)}/>
        <input type="password" name="" id="" placeholder='password' onChange={ev=> setPassword(ev.target.value)}/>
        <button>Login</button>
      </form>
    </div>
  )
}

export default LoginPage