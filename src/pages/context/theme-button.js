import React from 'react';
import { ThemeContext } from './theme-context';

class ThemeButton extends React.Component {
  constructor(props){
    super(props);
    this.state = null;
  }
  render () { 
   let props = this.props;
   let theme = this.context;
   console.log(this);
   return(
     <button
        {...props}
        style={{backgroundColor: theme.background}}
     />
   )
  }
}
ThemeButton.contextType = ThemeContext;
export default ThemeButton;