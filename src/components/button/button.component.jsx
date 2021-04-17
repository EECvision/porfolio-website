import { useContext } from 'react';
import { ThemeContext } from '../../states/theme/theme.context';
import styles from './button.module.css';

const Button = ({children, clickHandler})=>{ 
  const {elementColor, textColor} = useContext(ThemeContext);

  return <button onClick={clickHandler} style={{background: elementColor, color: textColor}} className={styles.buttonContainer}>{children}</button>
}

export default Button;