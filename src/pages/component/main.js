import React, {Component} from 'react';
import Sub from './sub';

class Main extends Component {
  callback(msg){
    console.log(msg);
  }

  render() {
    return(
      <div>
        <Sub callback={this.callback.bind(this)}></Sub>
      </div>
    )
  }
} 

export default Main;