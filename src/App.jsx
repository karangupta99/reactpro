import React from 'react'

const App = () => {
  return (
    <div>
      <div className=' px-3 py-24 flex items-center gap-5 justify-center'>
      <h2 className='text-green-800 font-bold text-2xl'>hello friend </h2>
      <h1 className='text-blue-800 font-bold text-2xl'>react is working now</h1>
      <p className='text-red-800 font-bold text-2xl'>thanku</p>
      <h4>{import.meta.env.VITE_SECRET_KEY}</h4>
      </div>
     


    </div>
  )
}

export default App