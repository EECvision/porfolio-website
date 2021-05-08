import styles from './header.module.css';
import { useEffect, useState, useRef, useContext } from 'react';
import { ThemeContext } from '../../states/theme/theme.context';
import { toggleMode } from '../../states/theme/theme.actions';
import LinkItem from '../link/link.component';

const Header = () => {

  const [dropdown, toggleDropdown] = useState(false)
  const { backgroundColor, elementColor, textColor, dispatch, mode, modeColor, bannerColor } = useContext(ThemeContext);

  const headerRef = useRef(null);
  const scrollRef = useRef(null);
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

  const handleMode = () => {
    if(window.sessionStorage.mode === "false"){
      window.sessionStorage.setItem("mode", "true")
    }else {
      window.sessionStorage.setItem("mode", "false")
    }
    dispatch(toggleMode())
  }

  return (
    <nav style={{ color: textColor, background: backgroundColor }} ref={headerRef} className={styles.navWrapper}>
      <div className={styles.navContainer}>
        <div style={{ background: elementColor }} className={styles.logoContainer}>EECvision</div>
        <div className={styles.navItemsContainer}>
          <div style={{ background: elementColor }} className={styles.navItem}>
            <LinkItem url='about' clickHandler={()=>{}}>About</LinkItem>
          </div>
          <div style={{ background: elementColor }} className={styles.navItem}>
            <LinkItem url='projects' clickHandler={()=>{}}>Projects</LinkItem>
          </div>
          <div style={{ background: elementColor }} className={styles.navItem}>
            <LinkItem url='contact' clickHandler={()=>{}}>Contact</LinkItem>
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
            <LinkItem url='about' clickHandler={() => toggleDropdown(false)}>About</LinkItem>
          </div>
          <div className={styles.navItemDropdown}>
            <LinkItem url='projects' clickHandler={() => toggleDropdown(false)}>Projects</LinkItem>
          </div>
          <div className={styles.navItemDropdown}>
            <LinkItem url='contact' clickHandler={() => toggleDropdown(false)}>Contact</LinkItem>
          </div>
        </div>
        <div style={{ background: backgroundColor, color: modeColor, border: `0.13rem solid ${bannerColor}` }} onClick={() => handleMode()} className={styles.darkMode}>
          <i style={{ marginRight: `${mode === "false" ? '-1rem' : '1rem'}` }} className="fas fa-sun"></i>
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