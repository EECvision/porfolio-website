import navActionTypes from './nav.types';

export const gotoAbout =()=>({
  type: navActionTypes.GOTO_ABOUT
});

export const gotoProject = () => ({
  type: navActionTypes.GOTO_PROJECT,
});

export const gotoContact =()=>({
  type: navActionTypes.GOTO_CONTACT
});

export const scrollToTop =()=>({
  type: navActionTypes.SCROLLTO_TOP
});

