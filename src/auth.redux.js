export const auth = (state={isLogin:false,user:'ross'},action)=>{
  switch (action.type) {
    case 'LOGIN':
      return {...state,isLogin:true}
    case 'LOGOUT':
      return {...state,isLogin:false}
    default:
      return state
  }
}

export const login = ()=>{
  return {type:'LOGIN'}
}

export const logout = ()=>{
  return {type:'LOGOUT'}
}