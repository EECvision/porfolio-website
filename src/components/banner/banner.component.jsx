import { useContext } from 'react';
import { ThemeContext } from '../../states/theme/theme.context';
import Button from '../button/button.component';
import styles from './banner.module.css';

const Banner = () => {
  const { inputColor, textColor } = useContext(ThemeContext)
  return(
    <article style={{color: textColor}} className={styles.bannerContainer}>
      <p className={styles.greetingContainer}>Hi, my name is</p>
      <h2 className={styles.nameContainer}>Emmanuel Ezeka.</h2>
      <h2 className={styles.roleContainer}>Front-end Web Developer.</h2>
      <p style={{color: inputColor}} className={styles.textContainer}>
        Being a web developer is one of the best things that has happened to me. 
        I never stopped learning, I never stopped failing, 
        I never stopped seeing myself breaking limits. 
        Every bit of code I write is a new commit to the previous version of myself.
      </p>
      <Button>Let's build together</Button>
    </article>
  )
}

export default Banner;