import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addStateNum, minusStateNum, addStateNumAsync, minusStateNumAsync} from './num-redux';

class Index extends Component {
  render(){
    const {state,addStateNum,minusStateNum,addStateNumAsync,minusStateNumAsync} = this.props;
    return (
      <div>
        <button onClick={addStateNum}>+</button>
        <span>{state.num}</span>
        <button onClick={minusStateNum}>-</button>

        <button onClick={minusStateNumAsync}>minusStateNumAsync</button>
        <button onClick={addStateNumAsync}>addStateNumAsync</button>
      </div>
    )
  }
}

const mapStateToProps = (state,props) => {
  console.log(state);
  console.log(props);
  return {
    state
  }
}

const mapDispathcToProps = {
  addStateNum,
  addStateNumAsync,
  minusStateNum,
  minusStateNumAsync
}
console.log(addStateNumAsync())
export default connect(mapStateToProps,mapDispathcToProps)(Index);