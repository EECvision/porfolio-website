import { useContext, useState } from 'react';
import Project from '../project/project.component';
import styles from './projects.module.css';
import PROJECT_DATA from '../../states/PROJECT-DATA';
import Button from '../button/button.component';
import { ThemeContext } from '../../states/theme/theme.context';
import { useTransition, config } from 'react-spring';
import LinkItem from '../link/link.component';

const Projects = () => {

  const _DATA = PROJECT_DATA;
  const [data, setData] = useState(PROJECT_DATA.slice(0, 4));
  const [filter, toggleFilter] = useState(false)
  const { textColor, headerBorder } = useContext(ThemeContext);

  const transition = useTransition(data, {
    from: { transform: 'translateY(-2rem)' },
    enter: { transform: 'translateX(0)' },
    leave: { transform: 'translateX(-2rem)' },
    delay: 300,
    trail: 300,
    config: config.mollases
  })

  const handleClick = () =>{ 
    toggleFilter(!filter)

    if(filter){
      setData(data.slice(0, 4))
    }else {
      setData(_DATA)
    }
  }

  return (
    <div id="projects" style={{ color: textColor }} className={styles.projectsWrapper}>
      <header className={styles.projectHeader}><div style={{ borderBottom: `0.3rem solid ${headerBorder}` }}>My Recent Projects</div></header>
      <section
        className={styles.projectsContainer}>
        {
          transition((styles, _data) => (
            <Project css={styles} key={_data.id} {..._data} />
          ))
        }
      </section>
      <LinkItem url={`${filter ? 'projects' : ''}`} >
        <Button invert clickHandler={ handleClick }>{`View ${filter ? 'less' : 'more'}`}</Button>
      </LinkItem>
      
    </div>
  )
}

export default Projects;