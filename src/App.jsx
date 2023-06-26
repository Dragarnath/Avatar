import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar';


import './global.css'

import styles from './App.module.css';

function App() {

  return (
    <div>
      <Header />
    
    <div className={styles.wrapper}>
      <Sidebar />
      <main>
      <Post 
      author='Josue'
      content='Esteja presente em cada momento da sua vida, antes que estes momentos se tornem apenas lembranças.'>
         
      </Post>
      </main>
    </div>
    </div>
  
  )
}

export default App
