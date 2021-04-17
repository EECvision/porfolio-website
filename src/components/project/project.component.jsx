import styles from './project.module.css';
import previewEasyBank from '../../assets/preview-easy-bank.jpg';
import previewJobListing from '../../assets/preview-job-listing.jpg';
import previewManage from '../../assets/preview-manage.jpg';
import previewRoom from '../../assets/preview-room.jpg';
import previewSocialMedia from '../../assets/preview-social.jpg';
import previewTodo from '../../assets/preview-todo.jpg';
import previewNote from '../../assets/preview-note.PNG';
import previewNuf from '../../assets/preview-nuf.png';
import previewShop from '../../assets/preview-shop.png';
import { useContext } from 'react';
import { ThemeContext } from '../../states/theme/theme.context';

const previews = {
  previewEasyBank: previewEasyBank,
  previewJobListing: previewJobListing,
  previewManage: previewManage,
  previewRoom: previewRoom,
  previewSocialMedia: previewSocialMedia,
  previewTodo: previewTodo,
  previewNote: previewNote,
  previewNuf: previewNuf,
  previewShop: previewShop
}

const Project = ({ name, description, liveUrl, githubUrl, icon, invert, tools }) => {
  const {textColor, elementColor, backgroundColor} = useContext(ThemeContext);

  return (
    <div style={{color: textColor}}  className={invert ? styles.projectContainerInverted : styles.projectContainer}>
      <div className={invert ? styles.imageWrapperInverted : styles.imageWrapper}>
        <img className={styles.imageContainer} src={previews[icon]} alt={`${name}`} />
      </div>
      <div className={invert ? styles.dataContainerInverted : styles.dataContainer}>
        <p className={styles.name}>{name}</p>
        <p style={{background: elementColor}} className={styles.description}>{description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos</p>
        <ul style={{background: backgroundColor}} className={styles.toolContainer}>
          {
            tools.map((tool, idx) => (
              <li className={styles.tool} key={idx}>{tool}</li>
            ))
          }
        </ul>
        <ul className={invert ? styles.linksInverted : styles.links}>
          <li className={styles.link}><a href={githubUrl}><i className="fab fa-github"></i></a></li>
          <li className={styles.link}><a href={liveUrl}><i className="fas fa-external-link-alt"></i></a></li>
        </ul>
      </div>
    </div>
  )
}

export default Project;