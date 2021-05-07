import styles from './about.module.css';
import myImage from '../../assets/image-eec.png';
import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../states/theme/theme.context';

const tools = ['React', 'Javascript', 'Node.js', 'Express.js', 'CSS', 'HTML', 'Github', 'Firebase', 'MongoDB'];

const About = () => {
  const { textColor, modeColor, inputColor, backgroundColor, headerBorder } = useContext(ThemeContext);

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(()=>{
    window.addEventListener("resize", ()=> setWidth(window.innerWidth));
  }, [width])

  const Tool = ({ children }) => (
    <li className={styles.tool}>
      <i style={{ color: modeColor, marginRight: '0.5rem' }} className="fas fa-caret-right"></i>
      {children}
    </li>
  )

  return (
    <article id="about" style={{ color: textColor }} className={styles.aboutWrapper}>
      <header className={styles.aboutHeader}><div style={{borderBottom: `0.3rem solid ${headerBorder}`}}>About myself</div></header>
      <section className={styles.aboutSection}>
        <div className={styles.aboutContainer}>
          <p className={styles.aboutText}>
            Hi, I am Emmanuel. A front-end web developer.  I have strong expertise
            with React, Javascript HTML, CSS, and Web Standards. Also, I am good
            at backend technologies which gives me the flexibility to build
            backend related projects. I am diverse in bringing ideas and solutions to a
            problem which proves more when engaging in group projects or working
            with a team. I'm very organized and prepared to give my best to any job
            opportunity I find myself in.
          </p>
          <h3 className={styles.toolHeader}>I build with but not limited to the following tools</h3>
          <ul className={styles.toolContainer}>
            {
              tools.map((tool, idx) => (
                <Tool key={idx}>{tool}</Tool>
              ))
            }
          </ul>
        </div>
        <div style={{border: width >= 768 ? `0.13rem solid ${inputColor}` : 'none'}} className={styles.imageWrapper}>
          <img style={{border: width >= 768 ? `0.1rem solid ${inputColor}` : 'none', background: backgroundColor}} className={styles.imageContainer} src={myImage} alt="Emmanuel Ezeka" />
        </div>
      </section>
    </article>
  )
}

export default About;

