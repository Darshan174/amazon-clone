import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./Login.css";
import { auth } from "./firebase"

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = e => {
    e.preventDefault();
    auth
        .signInWithEmailAndPassword(email, password)
        .then(auth => {
        navigate('/')
        })
        .catch(error => alert(error.message))
  }

  const register = e => {
    e.preventDefault();
    auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
          // it successfully created a new user with email and password

          console.log(auth);
          if (auth) {
            navigate('/')
          }
         })
         .catch(error => alert(error.message)) 
  }
  
  return (
    <div className='login'>
        <Link to='/'>
        <img
          className="login__logo"
          src='https://img.etimg.com/thumb/msid-59738992,width-640,resizemode-4,imgsize-25499/amazon.jpg'
         />
         </Link>

         <div className="login__container">
             <h1>Sign-in</h1>

             <form>
              <h5>E-mail</h5>
              <input type='text'  value={email} onChange={e => setEmail
                (e.target.value)}/>

              <h5>Password</h5>
              <input type='password' value={password}
              onChange={e => setPassword(e.target.value)}/>

              <button type='submit' onClick={signIn}
              className='login__signInButton'>Sign In</button>
             </form>
             <p>
             By Signing In, you agree to This FAKE Amazon 
             Clone's Conditions of Use and Privacy Notice.
             </p>

             <button onClick={register}
             className='login__registerButton'>Create your
              Amazon Account</button>
         </div>  
    </div>
  )
}

export default Login;
