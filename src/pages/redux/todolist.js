import React,{Component} from 'react';
import store from './store';
import {getActionChange, getActionClick,getActionRemove} from './actionCreator';
import ToDoListView from './toDoListView';
class toDoList extends Component {
  constructor(props){
    super(props);
    this.state = store.getState();
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    store.subscribe(this.handleStoreChange);
  }

  handleStoreChange(){
    this.setState(store.getState());
  }

  handleChange(e){
    console.log(e.target.value);
    const action = getActionChange(e.target.value);
    console.log('121',action)
    store.dispatch(action);
  }

  handleClick() {
    const action = getActionClick();
    store.dispatch(action);
  }

  handleRemove(i){
    const action = getActionRemove(i);
    store.dispatch(action);
  }

  render(){
    const {value, list, styleSheet} = this.state;
    console.log(list);
    return(
      <ToDoListView
        value = {value}
        list = {list}
        style = {styleSheet}
        handleChange = {this.handleChange}
        handleClick = {this.handleClick}
        handleRemove = {this.handleRemove}
      />
    )
  }
} 

export default toDoList;