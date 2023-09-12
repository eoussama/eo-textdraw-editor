import { Board } from '../../utils/models/board';
import BoardComponent from '../board/Board';
import styles from './Editor.module.scss';


export default function Editor() {
  const board = new Board();

  return (
    <div className={styles['root']}>
      <div className={styles['head']}></div>

      <div className={styles['main']}>
        <div className={styles['left']}></div>

        <div className={styles['center']}>
          <div className={styles['meta']}></div>
          <div className={styles['content']}>
            <BoardComponent board={board} />
          </div>
        </div>

        <div className={styles['right']}></div>
      </div>
    </div>
  )
}