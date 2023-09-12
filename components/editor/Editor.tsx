import styles from './Editor.module.scss';
import BoardComponent from '../board/Board';
import { Board } from '../../core/entity/board';


export default function Editor() {
  const board = new Board({ width: 1080, height: 720 });

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