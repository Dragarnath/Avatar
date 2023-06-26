import { Trash } from '@phosphor-icons/react'
import styles from './Comment.module.css'
import { ThumbsUp } from 'phosphor-react'

export function Comment(){
  return (
    <div className={styles.comment}>
    <img src="https://github.com/diego3g.png"  />
    <div className={styles.commentBox}>
      <div className={styles.commentContent}>
        <header>
          <div className={styles.authorAndTime}>
            <strong>Josué Pereira</strong>
            <time title='22 de Junho ás 09:03h' dateTime='2023-06-22 09:03:00'> Cerca de 1h atras </time>
            </div>

            <button title='Deletar comentario'>
              <Trash size={20} />
            </button>
        </header>
        <p> Muito bom, nota 0</p>

      </div>

      <footer>
        <button>
          <ThumbsUp />
          Aplaudir <span>20</span>
        </button>
      </footer>
    </div>

    </div>
  )
}