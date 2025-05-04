import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Validation from './loginValidation' 
import axios from 'axios'
function Login(){
  const [values,setValues]=useState({
    email:'',
    password:''
  })
const navigate=useNavigate();
  const [errors,setErrors]=useState({})
  const handleInput=(event)=>{
  setValues(prev => ({ ...prev, [event.target.name]: event.target.value }))

  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = Validation(values);
    setErrors(newErrors);
  
    if (!newErrors.email  && !newErrors.password ) {
      console.log('Submitting data:', values);
      axios.post('http://localhost:5000/login', values)
        .then(res => {
          if(res.data ==='login successful'){
            alert("login successfull")
            navigate('/');
          }
          else{
            alert("no data matched")
          }
         
        })
        .catch(err => console.log(err));
    }
  };
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
