import { useContext } from 'react';
import { ThemeContext } from '../../states/theme/theme.context';
import styles from './button.module.css';

const Button = ({ children, clickHandler, invert }) => {
  const { buttonColor, buttonColorInverse, buttonBackground, buttonBackgroundInverse, buttonBorder } = useContext(ThemeContext);

  return <button
    onClick={clickHandler}
    style={{
      background: invert ? buttonBackgroundInverse : buttonBackground,
      color: invert ? buttonColorInverse : buttonColor,
      border: `0.1rem solid ${buttonBorder}`
    }}
    className={styles.buttonContainer}>
    {children}
  </button>
}

export default Button;