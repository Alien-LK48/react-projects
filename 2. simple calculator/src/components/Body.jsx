import React from 'react'

export default function Body({ count,setCount }) {
    const countincrease = () => {
        setCount((count) => {
            return count + 1
        })
    }
    const countzero = () => {
        setCount((count) => {
            return count = 0
        })
    }
    const countdecrease = () => {
        setCount((count) => {
            return count - 1
        })
    }
    const inputcount = (e) => {
        setCount(Number(e.target.value))
    }
    return (
        <div className='bg-[black] w-[300px] h-[300px] flex flex-col justify-center items-center'>
            <input type="text" onChange={inputcount} value={count > 15 ? 0 : count} className={`${count > 10 ? 'text-[red]' : 'text-[black]'} w-[70px] h-[50px] p-[10px] text-center text-3xl font-bold`} placeholder='starting value' /><br />
            {count > 15 && <p className='text-[red]'>cant go far from 15!!</p>}
            <div className='flex flex-row gap-[5px] p-[10px]'>
                <button className='btn' onClick={countincrease}>+</button>
                <button className='btn' onClick={countzero}>0</button>
                <button className='btn' onClick={countdecrease} disabled={count === 0 ? true : false}>-</button>
            </div>
        </div>
    )
}
