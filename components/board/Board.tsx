import { useEffect, useState } from 'react';
import styles from './Board.module.css'

import { Board } from '../../utils/models/board';
import { Layer } from '../../utils/models/layer';
import { TextDraw } from '../../utils/models/textdraw';

import TextDrawComponent from '../element/TextDraw';


export default function BoardComponent(props: { board: Board }) {
  const [board] = useState(props.board);

  useEffect(() => {
    const layer1 = new Layer();
    const element1 = new TextDraw({ width: 50, height: 50 });
    const element2 = new TextDraw({ x: 200, y: 200, width: 100, height: 40 });

    if (board.layers.length == 0) {
      layer1.textdraws.push(element2);
      layer1.textdraws.push(element1);
      board.layers.push(layer1);
      console.log('init', board);
    }
  }, [board.id]);

  return (
    <div className={styles.board} style={{ width: board.width, height: board.height }}>
      <div className={styles.board__container}>
        {board.layers.flatMap(e => e.textdraws).map(e => <TextDrawComponent key={e.id} textdraw={e} />)}
      </div>
    </div>
  )
}