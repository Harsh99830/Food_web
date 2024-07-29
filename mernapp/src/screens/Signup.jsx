import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

export default function Signup() {
  let navigate = useNavigate()
    const [credentials, setcredentials] = useState({name:"",email:"",password:"",location:""})
    const handleSubmit = async (event)=>{
        event.preventDefault();
        const response = await fetch("http://localhost:5000/api/createuser",{
            method:'POST',
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({name:credentials.name,email:credentials.email,password: credentials.password, location:credentials.location})
        })
        const json = await response.json()
        console.log(json)
        if(!json.success){
            alert("Enter valid credentials")
        }
        if(json.success){
          navigate("/")
      }
    }

    const onChange = (event)=>{
        setcredentials({...credentials, [event.target.name]:event.target.value})
    }

  return (
    <>
    <div className='container'>
    <form className='m-3' onSubmit={handleSubmit}>
  <div className="form-group">
    <label htmlFor="name">Name</label>
    <input placeholder='Enter name'  type="text" className="form-control" name='name' value={credentials.name} onChange={onChange}/>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={credentials.email} placeholder="Enter email" onChange={onChange}/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else like facebook.</small>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" name='password' value={credentials.password} onChange={onChange}/>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Location</label>
    <input type="text" className="form-control" placeholder="Enter location" name='location' value={credentials.location} onChange={onChange}/>
  </div>
 
  <button type="submit" className="m-3 btn btn-success">Submit</button>
  <Link to={"/login"} className='m-3 btn btn-danger'>Already have an Account</Link>
</form>
</div>
    </>
  )
}
