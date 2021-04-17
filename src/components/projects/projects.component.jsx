import { useContext, useEffect, useRef, useState } from 'react';
import Project from '../project/project.component';
import styles from './projects.module.css';
import PROJECT_DATA from '../../states/PROJECT-DATA';
import Button from '../button/button.component';
import { ThemeContext } from '../../states/theme/theme.context';
import { NavContext } from '../../states/nav/nav.context';

const Projects = () => {
  const [data] = useState(PROJECT_DATA);
  const [filter, toggleFilter] = useState(false)
  const { textColor } = useContext(ThemeContext);
  const { project } = useContext(NavContext);
  const projectRef = useRef(null);

  useEffect(()=>{
    if(project) projectRef.current.scrollIntoView();
  })

  return (
    <div ref={projectRef} style={{ color: textColor }} className={styles.projectsWrapper}>
      <header className={styles.header}>My Recent Projects</header>
      <section className={styles.projectsContainer}>
        {
          data
          .filter((_data, idx)=> idx <= (filter ? 2 : 20))
          .map(_data => (
            <Project key={_data.id} {..._data} />
          ))
        }
      </section>
      <Button clickHandler={()=>toggleFilter(!filter)}>View more projects</Button>
    </div>
  )
}

export default Projects;