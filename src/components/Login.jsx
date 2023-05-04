import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username , setUserName] = useState('');
    const [password , setPassword] = useState();
    const [error , setError] = useState();
    const navigate = useNavigate();
      const inputRef = useRef();

    window.onload = function(){
        inputRef.current.focus();
    }

      const handleClick =() =>{
     
        if(username === 'freedom055' || password === 'freedom@055'){
            navigate('/home');
          }else{
          setError("Username Or Password Is Not Correct");
          };
          

          if(username === '' || password === ''){
            setError("Username Or Password is Empty")
          }

          setUserName('');
          setPassword('');

      }
      

  return (
    <div className='login'>
     <div className="login-content">
        <img src="" alt="" />
        <h1>Freedom Academy</h1>
        <h2>Login</h2>

        <div className="content">
        <i class="fa-regular fa-user"></i>
        <input type="text" placeholder='username' ref={inputRef}  value={username}
        onChange={(e) =>setUserName(e.target.value)} />
        </div>

        <div className="content">
        <i class="fa-solid fa-lock"></i>
        <input type="text" placeholder='password' value={password}
        onChange={(e) =>setPassword(e.target.value)}
        />
        </div>
      
         {error ? <p className='error-login'>{error}</p> :''}

         <button className="login-btn" onClick={handleClick}>Login</button>

        </div>  
     </div>
  )
}

export default Login
