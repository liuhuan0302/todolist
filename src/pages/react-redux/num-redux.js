const ADD_STATE_NUM = 'ADD_STATE_NUM';
const MINUS_STATE_NUM = 'MINUS_STATE_NUM';

 const num = (state = 0, action) => {
  let newState = state;
  switch(action.type){
    case ADD_STATE_NUM:
      return newState+1;
    case MINUS_STATE_NUM:
      return newState-1;
    default:
      return newState;
  }
}
// action
export const addStateNum = ()=>({
  type: ADD_STATE_NUM
})

export const minusStateNum = () => ({
  type: MINUS_STATE_NUM
}) 

//异步action
export const addStateNumAsync = () => (
  (dispatch) => {
    console.log(dispatch)
    setTimeout(()=>{
      dispatch(addStateNum())
    },3000)
  }
)

export const minusStateNumAsync = ()=> (
  (dispatch) => {
    setTimeout(()=>{
      dispatch(minusStateNum());
    },3000)
  }
)

export default num;