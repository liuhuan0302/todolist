import React, {Component} from 'react';
import {Button, Input, List} from 'antd';
import 'antd/dist/antd.css';

class ToDoListUI extends Component {
  render(){
    const {value, list,handleChange,handleClick, handleRemove} = this.props;
    return ( 
      <div>
        <Input type='text' value={value} allowClear placeholder='input with clear icon！' onChange={handleChange} style={{width:'300px', marginRight:'10px'}}/>
        <Button type='primary' onClick={handleClick}>发送</Button>
        <div>
          {
            <List
              size='large'
              header={<div>ToDoList:</div>}
              bordered
              split
              dataSource={list}
              renderItem={(item,index)=>{
                return(
                  <List.Item key={index}>
                    {item}
                    <span style={{ marginLeft:'10px'}} onClick={()=>{handleRemove(index)}}>x</span>
                  </List.Item>
                )
              }}
             />
          }
        </div>
      </div>
    )
  } 
}    

export default ToDoListUI;