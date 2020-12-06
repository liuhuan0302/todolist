
// reducer 管理仓库里面的状态
const defaultState = {
  value: '',
  list:['a','b','c'],
  styleSheet: {background: 'red',fontSize: '16px'}
}

const reducer = ( state = defaultState, action ) => {
  let newState = JSON.parse(JSON.stringify(state));
  switch(action.type){
    case 'SET_STORE_VALUE':
      newState.value = action.value;
      return newState;
    case 'INSERT_STORE_DATA':
      newState.list.push(newState.value);
      newState.value = '';
      return newState;
    case 'REMOVE_STORE_DATA':
      newState.list.splice(action.index,1);
      return newState;
    default:
      return newState;
  }
};

export default reducer;