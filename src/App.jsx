import { useState } from 'react'
import Background from './Components/Background';
import Foreground from './Components/Foreground'
import Cards from './Components/Cards';
function App() {

  return (
    <div className='relative w-full h-screen bg-zinc-800'>
      <Background/>
      <Foreground/>
      
    </div>
  )
}

export default App
