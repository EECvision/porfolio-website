import { useContext } from 'react';
import { ThemeContext } from '../../states/theme/theme.context';
import styles from './contact.module.css';

const Contact = () => {
  const { textColor, buttonColorInverse, buttonBackgroundInverse, buttonBorder } = useContext(ThemeContext);

  return (
    <div id='contact' style={{ color: textColor }} className={styles.contactContainer}>
      <header className={styles.header}>Contact me</header>
      <h1 className={styles.mainText}>Let's build together</h1>

      {/* <p className={styles.text}>
        I am someone who you would like to work with.
        I have a great passion for growth and development. Also,
        I have good communication, logical thinking, problem solving and analitical skills that will move your team to the next level.
        I am certain we can make it better together.
      </p> */}
      {/* <p className={styles.contactHeader}>
        <span style={{ color: textColor }}>I am always available via </span>
        <span style={{ background: elementColor, padding: '0.4rem 1rem', borderRadius: '0.3rem', color: inputColor }}>
          <i className="icon fas fa-long-arrow-alt-down"></i>
        </span>
      </p> */}

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