import { useContext, useEffect } from 'react';
import About from '../../components/about/about.component';
import Banner from '../../components/banner/banner.component';
import Contact from '../../components/contact/contact.component';
import Footer from '../../components/footer/footer.component';
import Header from '../../components/header/header.component';
import Projects from '../../components/projects/projects.component';
import { ThemeContext } from '../../states/theme/theme.context';
import styles from './homepage.module.css';


function HomePage() {
  const { backgroundColor }= useContext(ThemeContext);

  useEffect(()=>{
    const setColor = document.body.style.background = backgroundColor;
    return ()=> setColor;
  })
  return (
    <div className={styles.HomePageContainer}>
        <Header/>
        <div className={styles.offSetHeader}></div>
        <Banner/>
        <About/>
        <Projects/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default HomePage;