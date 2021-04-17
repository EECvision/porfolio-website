import { useContext, useState } from 'react';
import Project from '../project/project.component';
import styles from './projects.module.css';
import PROJECT_DATA from '../../states/PROJECT-DATA';
import Button from '../button/button.component';
import { ThemeContext } from '../../states/theme/theme.context';

const Projects = () => {
  const [data] = useState(PROJECT_DATA);
  const [filter, toggleFilter] = useState(false)
  const { textColor } = useContext(ThemeContext);

  return (
    <div id="projects" style={{ color: textColor }} className={styles.projectsWrapper}>
      <header className={styles.header}>My Recent Projects</header>
      <section className={styles.projectsContainer}>
        {
          data
          .filter((_data, idx)=> idx <= (filter ? 20 : 2))
          .map(_data => (
            <Project key={_data.id} {..._data} />
          ))
        }
      </section>
      <Button clickHandler={()=>toggleFilter(!filter)}>{`View more ${filter ? 'less' : 'more'}`}</Button>
    </div>
  )
}

export default Projects;