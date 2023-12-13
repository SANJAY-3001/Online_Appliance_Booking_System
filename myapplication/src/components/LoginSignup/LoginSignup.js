import React, { useState } from 'react'
import './LoginSign.css'
import usericon from '../assests/person.png'
import emailicon from '../assests/email.png'
import passwordicon from '../assests/password.png'
import bg1 from '../assests/bg1.avif'
import bg2 from '../assests/bg2.avif'
function LoginSignup() {
    const[action,setAction]=useState("Sign Up");
  return (
      <div className='box'>
    {action==="Sign Up"? <div></div>:
    <div className='icon-container'>
    <img src={bg1}></img>
    </div>}


    <div className='container'>
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>

      <div className="inputs">
      {action==="Login"?<div></div>:    <div className="input">
      <img src={usericon} alt=''></img>
      <input type='text' placeholder='Name'></input>
      </div>}

      <div className="input">
      <img src={emailicon} alt=''></img>
      <input type='email' placeholder='Email'></input>
      </div>

      <div className="input">
      <img src={passwordicon} alt=''></img>
      <input type='password' placeholder='Password'></input>
      </div>

      </div>
      {action==="Sign Up"?<div></div>:<div className='forgot-password'>Forgot Password?<span>Click Here!</span></div>}

      <div className='submit-container'>
      <div className={action==="Login" ? "submit gray" : "submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
      <div className={action==="Sign Up" ? "submit gray" : "submit"} onClick={()=>{setAction("Login")}}>Login</div>
      </div>

    </div>
    {action==="Login"? <div></div>:
    <div className='icon-container'>
    <img src={bg2}></img>
    </div>}

    </div>
  );
}
export default LoginSignup;
