// import React, {useState, useRef, useCallback} from 'react';

// function MeasureExample() {
//   const [height, setHeight] = useState(0);

//   const measuredRef = useCallback(node => {
//     console.log(node);
//     if(node !== null){
//       setHeight(node.getBoundingClientRect().height);
//     }
//   },[])
  
//   return (
//     <>
//       <h1 ref={measuredRef}>Hello, world</h1>
//       <h2>The above header is {Math.round(height)}px tall</h2>
//     </>
//   )
// }

// export default MeasureExample;


import React, {useCallback, useState} from 'react';

function MeasureExample() {
  const [rect,ref] = useClientRect();
  return(
    <>
      <h1 ref={ref}>Hello, world</h1>
      {rect !== null &&
        <h2>The above header is {Math.round(rect.height)}px tall</h2>
      }
    </>
  )
}

function useClientRect() {
  const [rect, setRect] = useState(null);
  const ref = useCallback(node=>{
    console.log(node);
    if(node !== null) {
      setRect(node.getBoundingClientRect());
    }
  },[]);
  console.log(rect);
  return [rect,ref];
}

export default MeasureExample;