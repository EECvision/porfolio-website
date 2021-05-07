import { useContext, useState } from 'react';
import Project from '../project/project.component';
import styles from './projects.module.css';
import PROJECT_DATA from '../../states/PROJECT-DATA';
import Button from '../button/button.component';
import { ThemeContext } from '../../states/theme/theme.context';

const Projects = () => {
  
  const [data] = useState(PROJECT_DATA);
  const [filter, toggleFilter] = useState(false)
  const { textColor, headerBorder } = useContext(ThemeContext);

  return (
    <div id="projects" style={{ color: textColor }} className={styles.projectsWrapper}>
      <header className={styles.projectHeader}><div style={{ borderBottom: `0.3rem solid ${headerBorder}` }}>My Recent Projects</div></header>
      <section style={{
        transition: 'all 0.3s ease-in',
        height: filter ? 500 * data.length : 500 * 3
      }} className={styles.projectsContainer}>
        {
          data
            .map(_data => (
              <Project key={_data.id} {..._data} />
            ))
        }
      </section>
      <Button invert clickHandler={() => toggleFilter(!filter)}>{`View ${filter ? 'less' : 'more'}`}</Button>
    </div>
  )
}

export default Projects;