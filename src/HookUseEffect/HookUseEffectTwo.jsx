import { useEffect, useState }from 'react'

import './HookUseEffectTwo.css'

export default function HookUseEffectTwo() {

  const [windowsWidth, setWindowsWidth] = useState(window.innerWidth)

  const handleResize = () => {
    setWindowsWidth(window.innerWidth)
  } 

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  
  return (
    <>
      <div className='hook'>
        <div className='resize-title'>Example: <span>Window Resize</span></div>
        <div className='note'>Note: Manually resize the window to view the value changes below.</div>
        <div className='value'>{windowsWidth}</div>
      </div>
    </>
  )
}