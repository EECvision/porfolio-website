import styles from './project.module.css';
import previewEasyBank from '../../assets/preview-easy-bank.jpg';
import previewRoom from '../../assets/preview-room.jpg';
import previewTodo from '../../assets/preview-todo.jpg';
import previewNote from '../../assets/preview-note.PNG';
import previewNuf from '../../assets/preview-nuf.png';
import previewShop from '../../assets/preview-shop.png';
import previewCountry from '../../assets/preview-country.png';
import { useContext } from 'react';
import { ThemeContext } from '../../states/theme/theme.context';

const previews = {
  previewEasyBank: previewEasyBank,
  previewCountry: previewCountry,
  previewRoom: previewRoom,
  previewTodo: previewTodo,
  previewNote: previewNote,
  previewNuf: previewNuf,
  previewShop: previewShop
}

const Project = ({ name, description, liveUrl, githubUrl, icon, invert, tools }) => {
  const { textColor, elementColor, backgroundColor, inputColor, projectBorder } = useContext(ThemeContext);

  return (
    <div style={{ color: textColor, boxShadow: `2px 2px 5px ${projectBorder}` }} className={invert ? styles.projectContainerInverted : styles.projectContainer}>
      <div className={invert ? styles.imageWrapperInverted : styles.imageWrapper}>
        <img className={styles.imageContainer} src={previews[icon]} alt={`${name}`} />
      </div>
      <div className={invert ? styles.dataContainerInverted : styles.dataContainer}>
        <div className={styles.nameLinks}>
          <p style={{ background: backgroundColor, color: textColor }} className={styles.name}>{name}</p>
          <ul className={styles.upLinks}>
            <li style={{ border: `0.1rem solid ${inputColor}` }} className={styles.link}><a href={githubUrl}><i className="fab fa-github"></i></a></li>
            <li style={{ border: `0.1rem solid ${inputColor}` }} className={styles.link}><a href={liveUrl}><i className="fas fa-external-link-alt"></i></a></li>
          </ul>
        </div>
        <p style={{ background: elementColor }} className={styles.description}>{description}</p>
        <ul style={{ background: backgroundColor }} className={styles.toolContainer}>
          {
            tools.map((tool, idx) => (
              <li className={styles.tool} key={idx}>{tool}</li>
            ))
          }
        </ul>
        <ul className={invert ? styles.linksInverted : styles.links}>
          <li style={{ border: `0.1rem solid ${inputColor}`, color: textColor }} className={styles.link}><a href={githubUrl}><i className="fab fa-github"></i></a></li>
          <li style={{ border: `0.1rem solid ${inputColor}`, color: textColor }} className={styles.link}><a href={liveUrl}><i className="fas fa-external-link-alt"></i></a></li>
        </ul>
      </div>
    </div>
  )
}

export default Project;