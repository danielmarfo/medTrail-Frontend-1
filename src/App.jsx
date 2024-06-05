import { useState } from 'react'
import './index.css'
import SignIn from './component/SignIn'
import SignUp from './component/SignUp'

function App() {
  const [isSignUp, setIsSignUp] = useState(false)

  const changeAuth = () => {
    setIsSignUp(prev => !prev)
  }

  return (
    <div className=' min-w[100dvw] min-h-[100dvh] flex flex-col justify-center items-center gap-6'>
      <div>
        <h1 className='text-4xl font-bold'><span className='text-[#0057FF]'>Med</span><span className='text-[#27AE60]'>Trail</span></h1>
      </div>
      <div className='shadow-xl min-w-[300px] w-[400px] py-10 px-5'>
        <div className='relative flex '>
          <p onClick={changeAuth} className={` grow cursor-pointer w-[150px] text-center text-2xl ${!isSignUp && "border-b-blue-700 border-b-2 text-blue-800"} p-2  z-10`}>Sign In</p>
          <p onClick={changeAuth} className={`grow cursor-pointer w-[150px] text-center text-2xl ${isSignUp && "border-b-blue-700 border-b-2 text-blue-800"} p-2 z-10`}>Sign Up</p>
          <span className='h-[2px] w-full absolute bottom-0 left-0 bg-gray-500'></span>
        </div>
        <div>
          {
            isSignUp ? <SignUp /> : <SignIn />
          }

        </div>
      </div>
    </div>
  )
}

export default App
