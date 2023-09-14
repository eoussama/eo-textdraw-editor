import { useMemo, useRef } from 'react';
import styles from './Board.module.scss';
import TextDrawComponent from '../textdraw/TextDraw';
import { SizeComponent } from '../../core/component/size';
import { TBoardComponentProps } from '../../core/utils/types/props/boardComponentProps.type';


export default function BoardComponent(props: TBoardComponentProps) {
  const { board } = props;
  const elementRef = useRef<any>();
  const boardSize = useMemo(() => board.getComponent(SizeComponent), [board]);

  return (
    <div className={styles['board']} style={{ width: boardSize?.sizeWidth, height: boardSize?.sizeHeight }}>
      <div className={styles.board__container} ref={elementRef}>
        {board.textdraws.map(e => <TextDrawComponent key={e.id} textdraw={e} parentRef={elementRef} />)}
      </div>
    </div>
  )
}