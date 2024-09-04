import Footer from '../Footer/Footer'
import Header from '../Header/Header'
//import HomeSection from '../HomeSection/HomeSection'
import AppRoutes from '../Routes/Routes'

import styles from './App.module.css'


function App() {

  return (
    <div className='app'>
      
      <div className={styles.headerWrapper}>
        <Header />
      </div>

      <AppRoutes />

      <Footer />
    </div>
  )
}

export default App
