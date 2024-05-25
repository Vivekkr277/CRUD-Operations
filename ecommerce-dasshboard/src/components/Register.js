import React,{useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import Header from './Header';
 
function Register() {
  const[name,setName] = useState("");
  const[email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

 async function handleSignup() {
    let item = {name, email, password};
    // console.warn(item)

    let result = await fetch("http://localhost:8000/api/register",{
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type":"application/json",
        "Accept":"application/json"
      },

    });
    result =await result.json();
     result = JSON.stringify(result);
    localStorage.setItem("user-info",result);
    navigate("/login");


  }
    //  useEffect(() => {
    //    if(localStorage.getItem("user-info")) {
    //      navigate("/add");
    //    }
    //  },[])

  return (
    < div>
    <Header/>
    <div className='col-sm-6 offset-sm-3'>
       <h1>SignUp </h1>

         <input type='text' value={name} onChange={(e) => setName(e.target.value)} className='form-control' placeholder='enter name'/> <br/> 
         <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className='form-control' placeholder='enter email'/><br/>
         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className='form-control' placeholder='enter password'/> <br/>
        <button onClick={() => handleSignup()} className='btn btn-primary'>signUp</button>
    </div>
    </div>
  )
}

export default Register
