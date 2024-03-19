import React from 'react'

const Register = () => {
  return (
    <div className='flex flex-col items-center bg-sky-200 w-full justify-center h-screen'>
      <div className='flex flex-col items-center justify-center shadow-2xl w-[400px] bg-gray-200 py-8 px-4 rounded-xl'>
        <h1 className='text-3xl font-semibold '>Register</h1>
        <p className='my-4'>Enter your details below</p>
        <input className='border border-b-2 focus:border-blue-300 px-4 py-2 outline-none text-lg my-2' type="name" placeholder='Name'/>

        <input className='border border-b-2 focus:border-blue-300 px-4 py-2 outline-none text-lg my-2' type="email" placeholder='Email'/>

        <input className='border border-b-2 focus:border-blue-300 px-4 py-2 outline-none text-lg my-2' type="password" placeholder='Password'/>
        <button className=' bg-red-500  w-fit px-4 py-2 rounded-lg hover:bg-green-500 text-white font-semibold'>Create Account</button>
      </div>
    </div>
  )
}

export default Register
