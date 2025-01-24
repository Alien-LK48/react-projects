import React, { useState } from 'react'
console.clear()
function App() {

  const [inpONe, setInpONe] = useState(``)
  const valueOfOneInp = (e) => {
    setInpONe(e.target.value)
  }
  const [inpTwo, setInpTwo] = useState(``)
  const valueOfTwoInp = (e) => {
    setInpTwo(e.target.value)
  }
  const [result, setResult] = useState(``)
  const showResult = (opr) => {
    if (opr === `+`) {
      const add = Number(inpONe) + Number(inpTwo)
      setResult(add.toFixed(2))
    }
    if (opr === `-`) {
      const sub = Number(inpONe) - Number(inpTwo)
      setResult(sub.toFixed(2))
    }
    if (opr === `*`) {
      const mul = Number(inpONe) * Number(inpTwo)
      setResult(mul.toFixed(2))
    }
    if (opr === `/`) {
      const div = Number(inpONe) / Number(inpTwo)
      setResult(div.toFixed(2))
    }

  }
  const clearDisplay = () => {
    setResult(``)
    setInpONe(``)
    setInpTwo(``)
  }
  return (
    <div className='flex flex-col items-center justify-center gap-[30px]'>
      <h1 className='text-4xl text-center uppercase mt-[100px]'>simple calculator</h1>
      <div className='bg-[black] w-[250px] h-[270px] flex flex-col p-[20px]'>
        <div className='flex flex-row gap-[10px] items-center justify-center'>
          <input type="text" className='w-[90px] h-[35px] text-center' placeholder='input 1' value={inpONe} onChange={valueOfOneInp} /> <br />
          <input type="text" className='w-[90px] h-[35px] text-center' placeholder='input 2' value={inpTwo} onChange={valueOfTwoInp} />
        </div>
        <p className='text-center font-bold text-3xl text-[white] my-[20px] px-[20px]'>{result}</p>
        <div className='flex flex-row gap-[5px] justify-center items-center'>
          <button className='btn' onClick={() => { showResult(`+`) }}>+</button>
          <button className='btn' onClick={() => { showResult(`-`) }}>-</button>
          <button className='btn' onClick={() => { showResult(`*`) }}>x</button>
          <button className='btn' onClick={() => { showResult(`/`) }}>÷</button>
        </div> <br />
        <button className='btn bg-[red]' onClick={clearDisplay}>Clear</button>
      </div>

    </div>
  )
}
export default App
