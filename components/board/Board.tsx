import { useEffect, useMemo, useRef, useState } from 'react';
import styles from './Board.module.scss'

import { Layer } from '../../utils/models/layer';

import TextDrawComponent from '../element/TextDraw';
import { TextDraw } from '../../core/entity/textdraw';
import { BoxTextDraw } from '../../core/entity/boxTextdraw';
import { Board } from '../../core/entity/board';
import { SizeComponent } from '../../core/component/size';


export default function BoardComponent(props: { board: Board }) {
  const elementRef = useRef<any>();
  const [board] = useState(props.board);
  const [elements, setElements] = useState<Array<TextDraw>>([]);
  const boardSize = useMemo(() => board.getComponent(SizeComponent), [board]);

  useEffect(() => {
    const layer1 = new Layer();

    const element1 = new BoxTextDraw({ width: 200, height: 50 });
    const element2 = new BoxTextDraw({ x: 50, y: 200, width: 100, height: 300 });

    if (board.layers.length == 0) {
      layer1.textdraws.push(element2);
      layer1.textdraws.push(element1);
      board.layers.push(layer1);
      console.log('init', board);

      setElements(board.layers.flatMap(e => e.textdraws));
    }
  }, [board.id]);

  return (
    <div className={styles.board} style={{ width: boardSize?.width, height: boardSize?.height }}>
      <div className={styles.board__container} ref={elementRef}>
        {elements.map(e => <TextDrawComponent key={e.id} textdraw={e} parentRef={elementRef} />)}
      </div>
    </div>
  )
}