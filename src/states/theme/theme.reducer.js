import themeActionTypes from './theme.types';

export const INITIAL_STATE = {
  mode: window.sessionStorage.mode
}

export const themeReducer = (state = INITIAL_STATE, action)=>{
  switch (action.type) {
    case themeActionTypes.TOGGLE_MODE:
      return{
        ...state,
        mode: window.sessionStorage.mode
      }
    default:
      return state;
  }
}