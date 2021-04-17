import styles from './App.module.css';
import HomePage from './pages/homepage/homepage.component';

function App(){
  return (
    <div className={styles.AppContainer}>
      <HomePage/>
    </div>
  )
}

export default App;