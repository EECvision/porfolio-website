import { useContext, useEffect, useRef } from 'react';
import { NavContext } from '../../states/nav/nav.context';
import { ThemeContext } from '../../states/theme/theme.context';
import styles from './contact.module.css';

const Contact = () => {
  const { textColor, elementColor, inputColor } = useContext(ThemeContext);
  const { contact } = useContext(NavContext);
  const contactRef = useRef(null);

  useEffect(() => {
    if (contact) contactRef.current.scrollIntoView();
  })

  return (
    <section ref={contactRef} style={{ color: textColor }} className={styles.contactContainer}>
      <header className={styles.header}>Contact me</header>
      <h1 className={styles.mainText}>Let's build together</h1>
      <p className={styles.text}>
        I am someone who you would like to work with.
        I have a great passion for growth and development. Also,
        I have good communication, logical thinking, problem solving and analitical skills that will move your team to the next level.
        I am certain we can make it better together.
      </p>
      <p className={styles.contactHeader}>
        <span style={{ color: textColor }}>I am always available via </span>
        <i
          style={{ background: elementColor, padding: '0.5rem 1rem', borderRadius: '0.3rem', color: inputColor }}
          className="icon fas fa-long-arrow-alt-down">
        </i>
      </p>
      <div className={styles.contactListContainer}>
        <div style={{ color: textColor }} className={styles.contact}> <i class="far fa-envelope"></i> ezekaemmanuel1710@gmail.com </div>
        <div style={{ color: textColor }} className={styles.contact}> <i class="fas fa-phone-alt"></i> +234 80 6481 9800 </div>
        <a style={{ border: `0.125rem solid ${inputColor}` }} className={styles.contact} href="https://twitter.com/EECvision"> <i class="fab fa-twitter"></i> </a>
      </div>
    </section>
  )
}

export default Contact;