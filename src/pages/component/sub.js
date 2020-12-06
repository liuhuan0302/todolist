import React from 'react';

const Sub = (props) => {
  const cb = (msg) => {
    return () => {
      props.callback(msg);
    }
  }

  return (
    <div>
      <button onClick={cb('我们通信啦')}>点击我</button>
    </div>
  )
}

export default Sub;