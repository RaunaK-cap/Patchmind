import React from 'react'

const page = () => {
  return (
    <div className='bg-neutral-100/90 h-screen  font-sans'>
        <div className=' flex items-center justify-center relative top-40 '>

      <div className='relative h-[30rem]  w-[30rem] flex justify-center shadow-sm hover:shadow-lg bg-neutral-300/50 border border-neutral-300 rounded-lg  '>
        <div className='flex flex-col py-40 gap-2'>
        <h2 className='font-bold text-4xl '> Your Patchmind</h2>
        <p className='font-light text-sm text-neutral-400'> Track your error through this dashboard </p>
        </div>
      </div>
        </div>
    </div>
  )
}

export default page
