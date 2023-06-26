import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post (){
  return (
   <article className={styles.Post}>
<header>
  <div className={styles.author}>
    <img className={styles.avatar} src="https://github.com/Dragarnath.png"  />
     <div className={styles.authorInfo}> 
     <strong> Josue Pereira</strong>
     <span>Devops Jr</span>
     </div>
  </div>
<div>
  <time title='22 de Junho ás 09:03h' dateTime='2023-06-22 09:03:00'> Publicado há 1h </time>
</div>
</header>
<div className={styles.content}>

  <p>Fala galeraa 👋</p>

<p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

 <p>👉 <a href=""> jane.design/doctorcare</a></p>

<p><a href="">#novoprojeto #nlw #rocketseat</a></p>
</div>

<form className={styles.commentForm}>
<strong>Deixe seu Feedback</strong>
  <textarea 
  placeholder='Deixe um comentário'
  />
 <footer>
  <button type="submit">Publicar</button>
  </footer>
</form>

<div className={styles.commentList}>
  <Comment />
  <Comment />
  <Comment />
</div>
   </article>
  )
}