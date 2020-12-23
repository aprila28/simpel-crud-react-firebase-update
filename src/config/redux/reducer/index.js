const initialState = {
    popup:false,
    isLogin: false,
    isLoading: false, 
    user: {}
  }
  
  const reducer = (state=initialState, action) => {
    if (action.type === 'CHANGE_POPUP') {
      return {
        ...state,  // copy value initialState(state)
        popup: action.value
      }
    }
    if (action.type === 'CHANGE_ISLOGIN') {
      return {
        ...state,  // copy value initialState(state)
        isLogin: action.value
      }
    }
    if (action.type === 'CHANGE_USER') {
        return {
          ...state,  // copy value initialState(state)
          user: action.value
        }
    }
    if (action.type === 'CHANGE_LOADING') {
        return {
          ...state,  // copy value initialState(state)
          isLoading: action.value
        }
    }
  
    return state;
  }

  export default reducer;