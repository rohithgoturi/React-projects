import React from 'react'

const card = (props) => {
  return (
    <div className=' bg-gray-900 text-white p-2.5 m-2.5 font-sans rounded-xl w-100 h-auto'>
        <div className="parent">
            <img src={props.img} alt="profile" className='w-32 h-32 rounded-full mx-auto border'/>
            <div className=' flex justify-center align-middle flex-col mt-4 text-center gap-2'>
              <h1 className=' text-2xl font-extrabold'>{props.user}</h1>
              <p className=' text-lg font-medium'>I am a frontend Developer at Amazon and I have 5 years of experience.</p>

              <h3 className=' text-xl font-bold'> SALARY : {props.salary}</h3>
              <button className=' bg-gray-600 m-2.5 p-2.5 text-lg font-bold active:bg-gray-900'>View Profile</button>
            </div>
        </div>
    </div>
  )
}

export default card