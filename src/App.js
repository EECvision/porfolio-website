import styles from './App.module.css';
import HomePage from './pages/homepage/homepage.component';

function App(){

  if (!(window.sessionStorage.setMode === "false")) {
    window.sessionStorage.setItem("mode", "true")
  }
  window.sessionStorage.setMode = "false";

  return (
    <div className={styles.AppContainer}>
      <HomePage/>
    </div>
  )
}

export default App;