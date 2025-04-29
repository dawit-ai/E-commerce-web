import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Validation from './signupValidation'
import axios from 'axios'
function Signup() {
  const [values,setValues]=useState({
    name:'',
    email:'',
    password:''
  })
  const navigate=useNavigate();
  const [errors,setErrors]=useState({})
  const handleInput=(event)=>{
  setValues(prev => ({ ...prev, [event.target.name]: event.target.values }))

  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = Validation(values);
    setErrors(newErrors);
  
    if (newErrors.name === '' && newErrors.email === '' && newErrors.password === '') {
      console.log('Submitting data:', values);
      axios.post('http://localhost:3000/signup', values)
        .then(res => {
          navigate('/login');
        })
        .catch(err => console.log(err));
    }
  };
  return (
    <div className='signup'>
      <form action="signup" onSubmit={handleSubmit}>
      <div className='name'>
          <label htmlFor="">Name</label>
          <input type="text" name="name"  onChange={handleInput} />
         {errors.name && <span>{errors.name}</span>}
        </div>
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
        <button type="submit">Sign Up</button>
        <Link to='/cart' >go to cart</Link>
      </form>
    </div>
  )
}

export default Signup