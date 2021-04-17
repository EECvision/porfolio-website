import styles from './header.module.css';
import { useEffect, useState, useRef, useContext } from 'react';
import { ThemeContext } from '../../states/theme/theme.context';
import { toggleMode } from '../../states/theme/theme.actions';
import LinkItem from './link-item.component';

const Header = () => {

  const [dropdown, toggleDropdown] = useState(false)
  const { backgroundColor, elementColor, textColor, mode, dispatch, inputColor } = useContext(ThemeContext);

  const headerRef = useRef(null);
  const scrollRef = useRef(null)
  useEffect(() => {
    let prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
      let currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        headerRef.current.style.top = "0";
      } else {
        headerRef.current.style.top = "-100px";
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
          <div style={{ background: elementColor }} className={styles.navItem}>
            <LinkItem>About</LinkItem>
          </div>
          <div style={{ background: elementColor }} className={styles.navItem}>
            <LinkItem>Projects</LinkItem>
          </div>
          <div style={{ background: elementColor }} className={styles.navItem}>
            <LinkItem>Contact</LinkItem>
          </div>
        </div>
        <div style={{ border: `0.12rem solid ${textColor}` }} className={styles.dropdown}>
          {
            dropdown
              ?
              <i onClick={() => toggleDropdown(!dropdown)} className={"fas fa-times"}></i>
              :
              <i onClick={() => toggleDropdown(!dropdown)} className="fas fa-bars"></i>
          }
        </div>
        <div style={{ background: backgroundColor, height: `${dropdown ? '12rem' : '0'}` }} className={styles.navItemsDropdown}>
          <div className={styles.navItemDropdown}>
            <LinkItem clickHandler={() => toggleDropdown(false)}>About</LinkItem>
          </div>
          <div className={styles.navItemDropdown}>
            <LinkItem clickHandler={() => toggleDropdown(false)}>Projects</LinkItem>
          </div>
          <div className={styles.navItemDropdown}>
            <LinkItem clickHandler={() => toggleDropdown(false)}>Contact</LinkItem>
          </div>
        </div>
        <div style={{ background: backgroundColor, color: inputColor, border: `0.13rem solid ${inputColor}` }} onClick={() => dispatch(toggleMode())} className={styles.darkMode}>
          <i style={{ marginRight: `${!mode ? '-1rem' : '1rem'}` }} className="fas fa-sun"></i>
        </div>
        <div
          style={{ color: textColor, border: `0.1rem solid ${textColor}` }}
          onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}
          ref={scrollRef} className={styles.scrollToTop}>
          <i className="fas fa-angle-up"></i>
        </div>
      </div>
    </nav>
  )
}

export default Header;