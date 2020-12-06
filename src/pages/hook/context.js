import React, {useStates, useEffect, useContext} from 'react';

const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee'
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222'
  }
}

const ThemeContext = React.createContext(themes);
console.log(ThemeContext.Provider)
function App(){
  return (
    <ThemeContext.Provider value={themes.dark}>
      <Toolbar />
    </ThemeContext.Provider>
  )
}

function Toolbar(props){
  return (
    <div>
      <ThemeButton />
    </div>
  )
}

function ThemeButton(){
  const theme = useContext(ThemeContext);
  console.log(theme);
  return (
    <button style ={{ background: theme.background, color: theme.foreground }}>
      I am styled by theme context;
    </button>
  )
}

export default App;