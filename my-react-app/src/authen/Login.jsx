import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Validation from './loginValidation' 
function Login(){
  const [values,setValues]=useState({
    email:'',
    password:''
  })
  const [errors,setErrors]=useState({})
  const handleInput=(event)=>{
    setValues(prev => ({ ...prev, [event.target.name]: event.target.value }))

  }
  const handleSubmit=(event)=>{
  event.preventDefault();
  setErrors(Validation(values))
  }
  return (
    <div className='login'>
      <form action="" onSubmit={handleSubmit}>
        <div className='email'>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" onChange={handleInput} />
          {errors.email && <span>{errors.email}</span>}
        </div>
        <div className='pass'>
          <label htmlFor="pass">Password</label>
          <input type="password" name="password" id="pass"  onChange={handleInput}/>
          {errors.password && <span>{errors.password}</span>}
        </div>
        <button type='submit' >Login</button>
        <p>if you don't have an account?</p> 
        <Link to='/signup'>Creat account</Link>
      </form>
    </div>
  )
}
export default Login
