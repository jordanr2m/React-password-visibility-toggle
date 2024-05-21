import React from 'react'
import "./Login.css"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Login = () => {
  return (
    <section className='login'>
      <div className='--card'>
        <h2>Login</h2>
        <form className='--form-control'>
            <input 
                type='text'
                placeholder='Username'
            />
            {/* Must place password input in another div because it has an icon next to it. Place icon in its own div */}
            <div className='password'>
                <input 
                    type='password'
                    placeholder='Password'
                />
                <div className='icon'>
                    <AiOutlineEye />
                </div>
            </div>
            <button>Login</button>
            {/* Does button need type="submit" ? Instructor didn't include it */}
        </form>
      </div>
    </section>
  )
}

export default Login
