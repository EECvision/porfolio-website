import navActionTypes from './nav.types';

export const INITIAL_STATE = {
  about: false,
  project: false,
  contact: false,
}

export const navReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case navActionTypes.GOTO_ABOUT:
      return {
        project: false,
        contact: false,
        about: true
      }
    case navActionTypes.GOTO_PROJECT:
      return {
        about: false,
        contact: false,
        project: true
      }
    case navActionTypes.GOTO_CONTACT:
      return {
        about: false,
        project: false,
        contact: true
      }
    case navActionTypes.SCROLLTO_TOP:
      return {
        about: false,
        project: false,
        contact: false,
      }
    default:
      return state;
  }
}
