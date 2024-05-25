 import React,{useState,useEffect} from 'react'
import Header from './Header'
import { useNavigate } from 'react-router-dom'

function Login() {

  const[email,setEmail] = useState("");
  const[password, setPassword] = useState("");
  const navigate = useNavigate();
//  const user = localStorage.getItem("user-info");

//  useEffect(() => {
//   if(localStorage.getItem("user-info")) {
//     navigate("/add");
//   }
//  },[])

 async function handleLogin() {
     const item = {email, password};
     
     let result = await fetch("http://localhost:8000/api/login",{
      method:"POST",
      body : JSON.stringify(item),
      headers:{
        "Content-Type":"application/json",
        "Accept":"application/json"
      }
     });
     result = await result.json();
     result = JSON.stringify(result);
     localStorage.setItem("user-info",result);
      navigate("/");
    
  }

  return (
    <div>
      <Header/>
      <div  className='col-sm-6 offset-sm-3'>

      <h2>Login Page</h2>
         <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} className='form-control' placeholder='enter email'/><br/>
         <input type='password' value={password} onChange={(e) =>setPassword(e.target.value)} className='form-control' placeholder='enter password'/><br/>
          <button onClick={handleLogin} className='btn btn-primary'>Login</button>

      </div>
     
    </div>
  )
}

export default Login
