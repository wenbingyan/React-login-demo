const test = {
  aaa:2,
  bbb:1
}
export  function counter( state=test,action){
  switch (action.type) {
    case 'ADD':
      return {
        ...state,
        aaa: state.aaa +1
      }
    case 'MINUS':
      return {
        ...state,
        aaa: state.aaa -1
      }
    default:
      return state
  }
}

export function ADD(){
  return {type:'ADD'}
}

export function MINUS(){
  return {type:'MINUS'}
}

export const ASYNC = () => {
  return (dispatch)=>{
    setTimeout(()=>{
      dispatch(ADD())
    }, 2000)
  }
}