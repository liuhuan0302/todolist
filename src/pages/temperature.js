import React, {Component} from 'react';
import BoilingVerdict from './boilingVerdict';

const scaleNames = {
  c : 'Celsius' ,
  f : 'Temperature'
}
class TemperatureInput extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(e) {
    console.log(this);
    this.props.onTemperatureChange(e.target.value);
  }
  render() {
    console.log(this.props);
    const scale = this.props.scale;
    const temperature = this.props.temperature;
    return(
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}</legend>
        <input 
          value={temperature} 
          onChange={this.handleChange}  
        />
        <BoilingVerdict 
          celsius={parseFloat(temperature)}
        />
      </fieldset>
    )
  }
}

export default TemperatureInput;