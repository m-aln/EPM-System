
import React, { useState } from 'react'
// import LoginModel from '../Component/LoginModel'
import background from '../Asstes/background.webp' 
import NavBar from '../Component/NavBar'
import { Link } from 'react-router-dom'

const Login = () => { 

    const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [warning,setWarning] = useState(false)
  const [warning1,setWarning1] = useState(false) 
  const [warning2,setWarning2] = useState(false) 
  const [loader,setLoader] = useState(false)

  return (
    <div className='w-screen h-full bg-cover bg-center'
    style={{backgroundImage: `url(${background})`}}
    >
      <div className='w-[100%] h-16'>
            <NavBar/>
        </div>
        <div>
      <div className='bg-cover w-full h-screen  flex justify-center items-center'>
      <div className='lg:w-[30%] md:w-[50%] sm:w-[50%] w-[80%] h-[80%] bg-[#e0e1e1] bg-opacity-75 rounded-2xl p-5'>
      <h1 className='text-[#0693be] text-3xl text-center font-medium mt-5 '>Login</h1>
        <div className='flex justify-center items-center mt-20'>
        <div className='w-[100%]'>
        <input onChange={(e)=>{setEmail(e.target.value)}} type='Email' placeholder='Email' className='w-[100%] outline-none bg-transparent border-b border-b-[#0693be] placeholder:text-[#0693be] placeholder:text-base flex justify-center mb-10 text-[#0693be] mt-5' />
         <input onChange={(e)=>{setPassword(e.target.value)}} type='password' placeholder='password' className='w-[100%] outline-none bg-transparent border-b border-b-[#0693be] placeholder:text-[#0693be] placeholder:text-base text-[#0693be] mb-12 mt-5' />
         {/* <FillWarning visible={warning} data={'You are not authorized'}/>
         <FillWarning visible={warning1} data={'Your Email/Password is wrong'}/>
         <FillWarning visible={warning2} data={'An error occurred, try again'}/> */}
          <button type='button' className='w-[100%] border border-[#0693be] text-center text-[#0693be] hover:text-white hover:bg-[#0693be90] transition ease-in-out delay-50 p-1 rounded-xl mt-12 flex justify-center items-center'>{!loader ? 'Login' : <div className='w-fit h-fit flex justify-center items-center'> <div
  class=" h-6 w-6 animate-spin rounded-full border border-solid border-current border-r-transparent align-[-0.125em] text-secondary motion-reduce:animate-[spin_1.5s_linear_infinite]"
  role="status">
  <span
    class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
    >Loading...</span>
</div>
</div>}</button>
<p className='text-[#0693be] text-center text-lg '>Don't have an account?
   <Link to={'/signup'}>signup</Link>
    </p>

        </div>
        </div>
      </div>
      </div>
    </div>
    </div>
  )
}

export default Login