import AppRoutes from '../Routes/Routes'

import styles from './App.module.css'

import Header from '../layout/Header/Header';
import Footer from '../layout/Footer/Footer'


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
