import React, { useEffect,useState } from 'react';

function Box(){
  const [state,setState] = useState({left: 0, top: 0, width: 100, height: 100});

  useEffect(()=>{
    const handleWindowMouseMove = (e) =>{
      setState(state=>({...state,left: e.pageX,top:e.pageY}))
    }
    window.addEventListener('mousemove',handleWindowMouseMove)
    return ()=> window.removeEventListener('mousemove',handleWindowMouseMove);
  },[])

  
}