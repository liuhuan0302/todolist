import React from 'react';
import {ThemeContext, themes} from './theme-context';
import ThemeButton from './theme-button';

function Toolbar(props){
  return(
    <ThemeButton onClick={props.changeTheme}>
      change Theme
    </ThemeButton>
  )
}


class Index extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      theme: themes.light,
    }

    this.toggleTheme = ()=>{
      this.setState(state=>({
        theme: state.theme === themes.dark ? themes.light : themes.dark,
      }))
    };
  }


  render(){
    return(
      <div>
        <ThemeContext.Provider value={this.state.theme}>
          < Toolbar changeTheme={this.toggleTheme}/>
        </ThemeContext.Provider>
        <div>
          <ThemeButton />
        </div>
      </div>
    )
  }
}

export default Index;