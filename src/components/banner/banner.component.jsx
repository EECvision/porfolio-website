import { useContext } from 'react';
import { gotoContact } from '../../states/nav/nav.actons';
import { NavContext } from '../../states/nav/nav.context';
import { ThemeContext } from '../../states/theme/theme.context';
import Button from '../button/button.component';
import LinkItem from '../link/link.component';
import styles from './banner.module.css';

const Banner = () => {
  const { bannerColor, bannerBackground } = useContext(ThemeContext);
  const { dispatchNav } = useContext(NavContext);

  return (
    <article style={{background: bannerBackground, color: bannerColor}} className={styles.bannerWrapper}>
      <div className={styles.bannerContainer}>
        <p className={styles.greetingContainer}>Hi, my name is</p>
        <h2 className={styles.nameContainer}>Emmanuel Ezeka.</h2>
        <h2 className={styles.roleContainer}>Front-end Web Developer.</h2>
        <p className={styles.textContainer}>
          Being a web developer is one of the best things that has happened to me.
          It gives me the opportunity to grow and develop my skills, and
          collaborate with people around the world in solving real problems.
          Every bit of code I write is a new commit to the previous version of myself.
      </p>
        <Button clickHandler={() => dispatchNav(gotoContact())}>
          <LinkItem url='contact' clickHandler={() => { }}>Let's build together</LinkItem>
        </Button>
      </div>
    </article>
  )
}

export default Banner;