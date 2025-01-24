import React, { useState } from 'react'
import Body from './components/Body'
console.clear()
function App() {
  const [count, setCount] = useState(0)
  return (
    <div className='flex flex-col items-center justify-center gap-[30px]'>
      <h1 className='text-4xl text-center uppercase mt-[100px]'>counter app</h1>
      <Body count={count} setCount={setCount}/>
    </div>
  )
}
export default App
