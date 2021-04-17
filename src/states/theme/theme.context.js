import { themeReducer, INITIAL_STATE } from './theme.reducer';
import { useReducer, createContext } from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [{mode}, dispatch] = useReducer(themeReducer, INITIAL_STATE)

  let darkmodeBackground = 'hsl(207, 26%, 17%)'
  let darkmodeElement = 'hsl(209, 23%, 22%)'
  let lightmodeText = 'hsl(200, 15%, 8%)'
  let lightmodeInput = 'hsl(0, 0%, 52%)'
  let lightmodeBackground = 'hsl(0, 0%, 96%)'
  let lightmodeElement = 'hsl(0, 0%, 100%)'
  let darkmodeText = 'hsl(0, 0%, 100%)'
  let darkmodeInput = 'hsl(0, 0%, 70%)'

  let backgroundColor = '';
  let elementColor = '';
  let inputColor = '';
  let textColor = '';

  if(mode){
     backgroundColor = lightmodeBackground;
     elementColor = lightmodeElement;
     textColor = lightmodeText;
     inputColor = lightmodeInput;
  }else{
    backgroundColor = darkmodeBackground;
    elementColor = darkmodeElement;
    textColor = darkmodeText;
    inputColor = darkmodeInput
  }

  return (
    <ThemeContext.Provider value={{ mode, dispatch, backgroundColor, elementColor, textColor, inputColor }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider;