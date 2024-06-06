import { useState } from 'react'
import Apple from '../assets/apple.svg'
import Google from '../assets/google.svg'

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleTextChange = (e, stateAction) => {
    stateAction(e.value)
  }
  return (
    <div className=' mt-9 flex flex-col gap-9 h-[400px]'>
      <input type="text" onChange={(e) => handleTextChange(e, setEmail)} value={email} placeholder='Email' className='border focus-within:outline-none border-[#BDBDBD] rounded-lg h-11 w-full indent-3' />
      <div className='relative'>
        <input type="password" onChange={(e) => handleTextChange(e, setPassword)} value={password} placeholder='Password' className='border focus-within:outline-none border-[#BDBDBD] rounded-lg h-11 w-full indent-3' />
        <button className='w-fit text-sm absolute h-5 -bottom-5 right-0 text-[#0057FF]'>Forgot password?</button>
      </div>
      <div className='flex flex-col gap-2'>
        <input className='bg-[#0057FF] cursor-pointer w-full text-white h-11 text-lg rounded-lg' type="button" value="Sign in" />
        <span className='w-full  text-sm text-center'>Don't have an account? <button className='text-[#0057FF]'>Sign up</button></span>
      </div>
      <div className='flex gap-5 items-center'>
        <span className='h-[2px] w-full bg-[#BDBDBD] block'></span>
        <span>OR</span>
        <span className='h-[2px] w-full bg-[#BDBDBD] block'></span>
      </div>
      <div className='flex justify-between'>
        <button className='flex justify-between items-center border-2 gap-3 p-2 rounded-lg'><img height={27} width={25} src={Apple} alt="Apple Logo" /> Apple</button>
        <button className='flex justify-between items-center gap-3  border-2 p-2 rounded-lg'><img src={Google} height={25} width={25} alt="Google Logo" /> Google</button>
      </div>
    </div>

  )
}

export default SignIn