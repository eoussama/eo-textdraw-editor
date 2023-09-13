import styles from './Editor.module.scss';
import BoardComponent from '../board/Board';
import { useBoardStore } from '../../core/store/board';


export default function EditorComponent() {
  const board = useBoardStore((state) => state.active);

  return (
    <div className={styles['root']}>
      <div className={styles['head']}></div>

      <div className={styles['main']}>
        <div className={styles['left']}></div>

        <div className={styles['center']}>
          <div className={styles['meta']}></div>
          <div className={styles['content']}>
            {board && <BoardComponent board={board} />}
          </div>
        </div>

        <div className={styles['right']}></div>
      </div>
    </div>
  )
}