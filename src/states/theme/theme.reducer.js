import themeActionTypes from './theme.types';

export const INITIAL_STATE = {
  mode: false
}

export const themeReducer = (state = INITIAL_STATE, action)=>{
  switch (action.type) {
    case themeActionTypes.TOGGLE_MODE:
      return{
        ...state,
        mode: !state.mode
      }
    default:
      return state;
  }
}
