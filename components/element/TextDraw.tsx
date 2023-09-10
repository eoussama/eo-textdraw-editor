import { MutableRefObject, useEffect, useRef, useState } from 'react';
import { ResizableBox } from 'react-resizable';
import Draggable from 'react-draggable';

import styles from './TextDraw.module.scss'

import { TextDraw } from '../../utils/models/textdraw';


export default function TextDrawComponent(props: { textdraw: TextDraw, parentRef: MutableRefObject<HTMLDivElement> }) {
  const [textdraw, setTextdraw] = useState(props.textdraw);

  const [minX, setMinX] = useState(0);
  const [maxX, setMaxX] = useState(0);
  const [minY, setMinY] = useState(0);
  const [maxY, setMaxY] = useState(0);

  const [minWidth, setMinWidth] = useState(0);
  const [maxWidth, setMaxWidth] = useState(0);
  const [minHeight, setMinHeight] = useState(0);
  const [maxHeight, setMaxHeight] = useState(0);

  const elementRef = useRef();
  const [isActive, setIsActive] = useState(false);
  const [isResizing, setIsResizing] = useState(false);

  const onDrag = (_: MouseEvent, e: any) => {
    textdraw.x = e.x;
    textdraw.y = e.y;

    setTextdraw(new TextDraw(textdraw));
  }

  const onResize = (_: MouseEvent, e: any) => {
    const { size } = e;

    textdraw.width = size.width;
    textdraw.height = size.height;

    setTextdraw(new TextDraw(textdraw));
  };

  useEffect(() => {
    document.addEventListener('click', e => {
      const currentComponent = elementRef.current as unknown as HTMLDivElement;
      setIsActive(currentComponent == e.target || currentComponent.contains(e.target as any));
    });
  }, []);

  useEffect(() => {
    const bounds = props.parentRef.current.getBoundingClientRect();

    setMinY(0);
    setMinX(bounds.x);
    setMaxX(bounds.width - textdraw.width);
    setMaxY(bounds.height - textdraw.height);
  }, [textdraw.height, textdraw.width]);

  useEffect(() => {
    const bounds = props.parentRef.current.getBoundingClientRect();

    setMinWidth(10);
    setMinHeight(10);
    setMaxWidth(bounds.width - textdraw.x);
    setMaxHeight(bounds.height - textdraw.y);
  }, [textdraw.height, textdraw.width]);

  return (
    <>
      <Draggable
        onDrag={onDrag}
        onStart={() => !isResizing}
        defaultPosition={{ x: textdraw.x, y: textdraw.y }}
        bounds={{ left: minX, right: maxX, top: minY, bottom: maxY }}
      >
        <div
          ref={elementRef}
          className={`${styles.textdraw} ${isActive ? styles['textdraw--active'] : ''}`}
          style={{
            width: textdraw.width,
            height: textdraw.height
          }}
        >
          <div className={styles['textdraw__meta']}>
            [{textdraw.name}]
            {!isResizing && ` (x: ${textdraw.x}, y: ${textdraw.y})`}
            {isResizing && ` (width: ${textdraw.width}, height: ${textdraw.height})`}
          </div>

          <ResizableBox
            onResize={onResize}
            handleSize={[8, 8]}
            width={textdraw.width}
            height={textdraw.height}
            minConstraints={[minWidth, minHeight]} maxConstraints={[maxWidth, maxHeight]}
            className={styles['textdraw__resizer']}
            handle={<span
              className={styles['handle']}
              onMouseEnter={() => setIsResizing(true)}
              onMouseLeave={() => setIsResizing(false)} />}>
          </ResizableBox>
        </div>
      </Draggable>
    </>
  )
}