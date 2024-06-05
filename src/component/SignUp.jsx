import {useState} from 'react'

const SignUp = () => {
  const [fullname,setFullname] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [confirmPassword,setConfirmPassword] = useState("")

  const handleTextChange = (e, stateAction) => {
    stateAction(e.value)
  }
  return (
    <div className=' mt-9 flex flex-col gap-9 h-[400px]'>
      <input type="text" onChange={(e) => handleTextChange(e, setFullname)} value={fullname} placeholder='Full Name' className='border focus-within:outline-none border-[#BDBDBD] rounded-lg h-11 w-full indent-3' />
      <input type="text" onChange={(e) => handleTextChange(e, setEmail)} value={email} placeholder='Email' className='border focus-within:outline-none border-[#BDBDBD] rounded-lg h-11 w-full indent-3' />
      <input type="password" onChange={(e) => handleTextChange(e, setPassword)} value={password} placeholder='Password' className='border focus-within:outline-none border-[#BDBDBD] rounded-lg h-11 w-full indent-3' />
      <input type="password" onChange={(e) => handleTextChange(e, setConfirmPassword)} value={confirmPassword} placeholder='Confirm Password' className='border focus-within:outline-none border-[#BDBDBD] rounded-lg h-11 w-full indent-3' />
      <div className='flex flex-col gap-2'>
        <input className='bg-[#0057FF] cursor-pointer w-full text-white h-11 text-lg rounded-lg' type="button" value="Sign Up" />
        <span className='w-full  text-sm text-center'>Already have an account? <button className='text-[#0057FF]'>Sign in</button></span>
      </div>
    </div>
  )
}

export default SignUp