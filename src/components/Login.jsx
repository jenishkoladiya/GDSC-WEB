import React from 'react'

const Login = () => {
  return (
    <div className='flex flex-col items-center bg-sky-200 w-full justify-center h-screen'>
      <div className='flex flex-col items-center justify-center shadow-lg w-[400px] bg-gray-200 py-8 px-4 rounded-xl'>
        <h1 className='text-3xl font-semibold '>Login</h1>
        <p className='my-4'>Enter your details below</p>
        <input className='border px-4 py-2 rounded-md outline-none focus:border-blue-300 border-gray-900 text-lg my-2' type="email" placeholder='Email'/>
        <hr />
        <input className='border px-4 py-2 rounded-md outline-none focus:border-blue-300 border-gray-900 text-lg my-2' type="password" placeholder='Password'/>
        <button className=' bg-orange-500  w-fit px-4 py-2 rounded-lg text-white font-semibold'>Login</button>
      </div>
    </div>
  )
}

export default Login
