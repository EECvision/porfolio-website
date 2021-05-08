import { useContext } from 'react';
import { ThemeContext } from '../../states/theme/theme.context';
import styles from './contact.module.css';

const Contact = () => {
  const { textColor, buttonColorInverse, buttonBackgroundInverse, buttonBorder, headerBorder } = useContext(ThemeContext);

  return (
    <div id='contact' style={{ color: textColor }} className={styles.contactContainer}>
      <header className={styles.header} >
        <div style={{ borderBottom: `0.3rem solid ${headerBorder}` }}>Contact me</div>
      </header>
      <h1 className={styles.mainText}>Let's build together</h1>
      <div className={styles.contactListContainer}>
        <div style={{ color: textColor }} className={styles.contact}> <i className="far fa-envelope"></i> ezekaemmanuel1710@gmail.com </div>
        <div style={{ color: textColor }} className={styles.contact}> <i className="fas fa-phone-alt"></i> +234 80 6481 9800 </div>
        <div className={styles.links}>
          <a style={{ background: buttonBackgroundInverse, border: `0.1rem solid ${buttonBorder}` }} className={styles.link} href="https://twitter.com/EECvision"> <i style={{ color: buttonColorInverse }} className="fab fa-twitter"></i> </a>
          <a style={{ background: buttonBackgroundInverse, border: `0.1rem solid ${buttonBorder}` }} className={styles.link} href="https://github.com/EECvision"> <i style={{ color: buttonColorInverse }} className="fab fa-github"></i> </a>
        </div>
      </div>
    </div>
  )
}

export default Contact;