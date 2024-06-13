import { useTheme, useThemeUpdate } from './CustomContext'

export default function FunctionContext() {
  const darkTheme = useTheme()
  const toggleTheme = useThemeUpdate()
  const themeStyles = {
    backgroundColor: darkTheme ? '#000' : '#f7e4a8',
      color: darkTheme ? '#f7e4a8' : '#000',
      padding: '20px',
      width: '70%',
      marginLeft: '15px'
  }

  return (
    <>
      <div className='function' style={themeStyles}>Function Context Component</div>
      <button className='context-button' onClick={toggleTheme}>Toggle Function Context</button>
    </>
  )
}
