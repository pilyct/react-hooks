import { useState, useEffect, useRef } from 'react';
import './HookUseRef.css'

export default function HookUseRef() {
  const [name, setName] = useState('');
  const prevName = useRef('')
  // const renderCount = useRef(0);

  // useEffect(() => {
  //   renderCount.current = renderCount.current + 1;
  //   }
  // )

  useEffect(() => {
    prevName.current = name;
  }, [name])


  return (
    <div className='hook'>
      <div className='ref-title'>Example: <span>Change Name</span></div>
      <div className='ref-container'>
        <input value={name} onChange={(event) => setName(event.target.value)}></input>
        <div className='output'>My name is <span>{name}</span> and it used to be <span>{prevName.current}</span></div>
        {/* <div>I render this component {renderCount.current} times</div> */}
      </div>

    </div>
  )
}
