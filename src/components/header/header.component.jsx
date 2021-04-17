import styles from './header.module.css';
import { useEffect, useState, useRef, useContext } from 'react';
import { ThemeContext } from '../../states/theme/theme.context';
import { toggleMode } from '../../states/theme/theme.actions';
import { gotoAbout, gotoContact, gotoProject, scrollToTop } from '../../states/nav/nav.actons';
import { NavContext } from '../../states/nav/nav.context';

const Header = () => {

  const [dropdown, toggleDropdown] = useState(false)
  const { backgroundColor, elementColor, textColor, mode, dispatch, inputColor } = useContext(ThemeContext);
  const { dispatchNav } = useContext(NavContext);

  const headerRef = useRef(null);
  const scrollRef = useRef(null)
  useEffect(() => {
    let prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
      let currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        headerRef.current.style.top = "0";
      } else {
        headerRef.current.style.top = "-70px";
      }
      prevScrollpos = currentScrollPos;

      if (window.pageYOffset > 100) {
        scrollRef.current.style.display = 'block'
      } else {
        scrollRef.current.style.display = 'none'
      }
    }
  })

  return (
    <nav style={{ color: textColor, background: backgroundColor }} ref={headerRef} className={styles.navWrapper}>
      <div className={styles.navContainer}>
        <div style={{ background: elementColor }} className={styles.logoContainer}>EECvision</div>
        <div className={styles.navItemsContainer}>
          <div onClick={() => dispatchNav(gotoAbout())} style={{ background: elementColor }} className={styles.navItem}>About</div>
          <div onClick={() => dispatchNav(gotoProject())} style={{ background: elementColor }} className={styles.navItem}>Projects</div>
          <div onClick={() => dispatchNav(gotoContact())} style={{ background: elementColor }} className={styles.navItem}>Contact</div>
        </div>
        <div style={{border: `0.12rem solid ${textColor}`}} className={styles.dropdown}>
          {
            dropdown
              ?
              <i onClick={() => toggleDropdown(!dropdown)} className={"fas fa-times"}></i>
              :
              <i onClick={() => toggleDropdown(!dropdown)} className="fas fa-bars"></i>
          }
        </div>
        <div style={{ background: backgroundColor, height: `${dropdown ? '12rem' : '0'}` }} className={styles.navItemsDropdown}>
          <div onClick={() =>{ dispatchNav(gotoAbout()); toggleDropdown(!dropdown)}} className={styles.navItemDropdown}>About</div>
          <div onClick={() =>{ dispatchNav(gotoProject()); toggleDropdown(!dropdown)}} className={styles.navItemDropdown}>Projects</div>
          <div onClick={() =>{ dispatchNav(gotoContact()); toggleDropdown(!dropdown)}} className={styles.navItemDropdown}>Contact</div>
        </div>
        <div style={{ color: inputColor, border: `0.2rem solid ${inputColor}` }} onClick={() => dispatch(toggleMode())} className={styles.darkMode}>
          {
            mode
              ?
              <i className="fas fa-sun"></i>
              :
              <i className="fas fa-sun"></i>
          }
        </div>
        <div
          style={{ color: textColor, border: `0.1rem solid ${textColor}` }}
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
            dispatchNav(scrollToTop())
          }}
          ref={scrollRef} className={styles.scrollToTop}>
          <i class="fas fa-angle-up"></i>
        </div>
      </div>
    </nav>
  )
}

export default Header;