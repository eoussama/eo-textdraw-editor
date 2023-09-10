import styles from './Home.module.css'
import { Board } from '../../utils/models/board'
import BoardComponent from '../../components/board/Board'


export default function HomeHome() {
  const board = new Board()
  return (
    <div>
      <h1>EO TextDraw Editor</h1>
      <hr />
      <BoardComponent board={board} />
    </div>
  )
}