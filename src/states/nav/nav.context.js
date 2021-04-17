import { navReducer, INITIAL_STATE } from './nav.reducer';
import { useReducer, createContext } from 'react';

export const NavContext = createContext();

const NavContextProvider = ({ children }) => {

  const [
    {
      about,
      project,
      contact,
      scrollToTop
    }, dispatchNav] = useReducer(navReducer, INITIAL_STATE)

  return (
    <NavContext.Provider value={{ about, project, contact, scrollToTop, dispatchNav }}>
      {children}
    </NavContext.Provider>
  )
}

export default NavContextProvider;