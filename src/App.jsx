import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/Dragarnath.png',
      name: 'Josue Pereira',
      role: 'Devops'
    },
    publishedAt: new Date ('2023-06-2023 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Felipe Santos',
      role: 'Financeiro',
    },
    
    content: [
     { type: 'paragraph', content: ' Fala galeraa 👋' },
     { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
     { type: 'link', content: 'jane.design/doctorcare' }
    ],
    publishedAt: new Date ('2023-06-2023 20:00:00'),
  }
  
]



import './global.css'

import styles from './App.module.css';

function App() {
  return (
    <div>
      <Header />
    
    <div className={styles.wrapper}>
      <Sidebar />
      <main>
      {posts.map (post => {
        return (
           <Post
           author={post.author}
           content={post.content}
           publishedAt={post.publishedAt}
          

           />
        )
      })}
      </main>
    </div>
    </div>
  
  )
}

export default App
