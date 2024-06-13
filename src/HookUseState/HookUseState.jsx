import { useState } from 'react'
import './HookUseState.css'

export default function HookUseState() {

  const [count, setCount] = useState(() => {
    console.log('run function')
    return 0;
  })

  function decreaseCount() {
    setCount(prevCount => prevCount > 0 ? prevCount - 1 : 0)
  }

  function increaseCount() {
    setCount(prevCount => prevCount + 1)
  }


  return (
    <>
      <div className='hook'>
        <div className='counter-title'>Example: <span>Counter</span> </div>
        <div className='counter'>
          <button onClick={decreaseCount}> - </button>
          <span>{count}</span>
          <button onClick={increaseCount}> + </button>
        </div>
      </div>
    </>
  )
}
