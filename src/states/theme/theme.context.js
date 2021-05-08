import { themeReducer, INITIAL_STATE } from './theme.reducer';
import { useReducer, createContext } from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [{ mode }, dispatch] = useReducer(themeReducer, INITIAL_STATE)

  let darkmodeBackground = 'hsl(207, 26%, 17%)'
  let darkmodeElement = 'hsl(209, 23%, 22%)'
  let lightmodeText = 'hsl(200, 15%, 8%)'
  let lightmodeInput = 'hsl(0, 0%, 52%)'
  let lightmodeBackground = 'hsl(0, 0%, 96%)'
  let lightmodeElement = 'hsl(0, 0%, 100%)'
  let darkmodeText = 'hsl(0, 0%, 100%)'
  let darkmodeInput = 'hsl(0, 0%, 70%)'
  let lightmodeBanner = ' hsl(217, 90%, 61%)';
  let lightmodeMode = 'hsl(51, 100%, 47%)';
  let lightmodeHeader = 'hsl(240, 91%, 70%)';
  let lightmodeProject = 'hsl(0, 0%, 80%)';
  let darkmodeProject = 'hsl(0, 0%, 5%)';

  let backgroundColor = '';
  let elementColor = '';
  let inputColor = '';
  let textColor = '';
  let bannerBackground = '';
  let bannerColor = '';
  let buttonColor = '';
  let buttonColorInverse = '';
  let buttonBackground ='';
  let buttonBackgroundInverse = '';
  let buttonBorder = '';
  let modeColor = '';
  let headerBorder = '';
  let projectBorder = '';

  if (mode !== "false") {
    modeColor = lightmodeMode;
    backgroundColor = lightmodeBackground;
    elementColor = lightmodeElement;
    textColor = lightmodeText;
    inputColor = lightmodeInput;
    buttonColor = lightmodeBanner;
    buttonColorInverse = darkmodeText;
    buttonBackground = darkmodeText;
    buttonBackgroundInverse = lightmodeBanner;
    buttonBorder = lightmodeBanner;
    bannerBackground = lightmodeBanner;
    bannerColor = darkmodeText;
    headerBorder = lightmodeHeader;
    projectBorder = lightmodeProject;

  } else {
    backgroundColor = darkmodeBackground;
    elementColor = darkmodeElement;
    textColor = darkmodeText;
    inputColor = darkmodeInput;
    bannerColor = darkmodeText;

    buttonColor = darkmodeText;
    buttonColorInverse = darkmodeText;
    buttonBackground = darkmodeElement;
    buttonBackgroundInverse = darkmodeElement;
    buttonBorder = darkmodeText;
    
    bannerBackground = darkmodeBackground;
    modeColor = darkmodeInput;
    headerBorder = lightmodeHeader;
    projectBorder = darkmodeProject;
  }

  return (
    <ThemeContext.Provider value={{
      mode, dispatch, backgroundColor,
      elementColor, textColor, inputColor,
      bannerColor, bannerBackground, buttonColor,
      modeColor, buttonColorInverse, buttonBackground, 
      buttonBackgroundInverse, buttonBorder, headerBorder,
      projectBorder
    }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider;