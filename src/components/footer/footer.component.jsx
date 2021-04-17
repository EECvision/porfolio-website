import { useContext } from 'react';
import { ThemeContext } from '../../states/theme/theme.context';
import styles from './footer.module.css';

const Footer = () => {
  const {elementColor, textColor} = useContext(ThemeContext)
  return (
    <footer style={{color: textColor, background: elementColor}} className={styles.footerWrapper}>
      <div className={styles.footerContainer}>Built by Emmanuel Ezeka &#x2728;</div>
    </footer>
  )
}

export default Footer