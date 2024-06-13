import { Component } from 'react'
import { ThemeContext } from './HookUseContext'


export default class ClassContext extends Component {


  themeStyles(dark) {
    return {
      backgroundColor: dark ? '#000' : '#f7e4a8',
      color: dark ? '#f7e4a8' : '#000',
      padding: '20px',
      width: '70%',
      marginLeft: '15px',
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {darkTheme => {
          return <div className='class' style={this.themeStyles(darkTheme)}>Class Context Component</div>
        }}
      </ThemeContext.Consumer>
      
    )
  }
}
