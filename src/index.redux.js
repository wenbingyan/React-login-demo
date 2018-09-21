export  function reducer( state=0,action){
  switch (action.type) {
    case 'ADD':
      return state + 1
    case 'MINUS':
      return state - 1
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