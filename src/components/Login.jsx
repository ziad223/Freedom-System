import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username , setUserName] = useState('');
    const [password , setPassword] = useState();
    const [error , setError] = useState();
    const navigate = useNavigate();

      const handleClick =() =>{
     
        if(username === 'freedom055' || password === 'freedom@055'){
            navigate('/home');
          }else{
          setError("UserName Or Password Is Not Correct");
          };
          

          if(username === '' || password === ''){
            setError("UserName Or Password is Empty")
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
        <input type="text" placeholder='username'  value={username}
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