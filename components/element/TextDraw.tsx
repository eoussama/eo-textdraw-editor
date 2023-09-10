import { MutableRefObject, useEffect, useState } from 'react';
import Draggable from 'react-draggable';

import styles from './TextDraw.module.scss'

import { TextDraw } from '../../utils/models/textdraw';


export default function TextDrawComponent(props: { textdraw: TextDraw, parentRef: MutableRefObject<HTMLDivElement> }) {
  const [textdraw, setTextdraw] = useState(props.textdraw);

  const [minX, setMinX] = useState(0);
  const [maxX, setMaxX] = useState(0);
  const [minY, setMinY] = useState(0);
  const [maxY, setMaxY] = useState(0);

  const handleDrag = (_: MouseEvent, e: any) => {
    textdraw.x = e.x;
    textdraw.y = e.y;

    setTextdraw(new TextDraw(textdraw));
  }

  useEffect(() => {
    const bounds = props.parentRef.current.getBoundingClientRect();

    setMinX(bounds.x);
    setMaxX(bounds.width - textdraw.width);
    setMinY(0);
    setMaxY(bounds.height - textdraw.height);
    console.log({ bounds });
  }, [textdraw.height, textdraw.width]);

  return (
    <Draggable
      onDrag={handleDrag}
      defaultPosition={{ x: textdraw.x, y: textdraw.y }}
      bounds={{ left: minX, right: maxX, top: minY, bottom: maxY }}
    >
      <div
        className={styles.textdraw}
        style={{ width: textdraw.width, height: textdraw.height }}
      >
        Textdraw {textdraw.x}x{textdraw.y}
      </div>
    </Draggable>
  )
}