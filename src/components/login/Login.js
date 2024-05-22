import React from 'react'
import "./Login.css"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Login = () => {
  return (
    <section className='login --100vh --center-all'>
      <div className='--card --bg-light'>
        <h2 className='--color-danger'>Login</h2>
        <form className='--form-control'>
            <input 
                type='text'
                placeholder='Username'
                className='--width-100'
            />
            {/* Must place password input in another div because it has an icon next to it. Place icon in its own div */}
            <div className='password'>
                <input 
                    type='password'
                    placeholder='Password'
                    className='--width-100'
                />
                <div className='icon'>
                    <AiOutlineEye />
                </div>
            </div>
            <button className='--btn --btn-danger --btn-block'>Login</button>
            {/* Does button need type="submit" ? Instructor didn't include it */}
        </form>
      </div>
    </section>
  )
}

export default Login
