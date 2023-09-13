import { useEffect, useMemo, useRef, useState } from 'react';
import { ResizableBox } from 'react-resizable';
import Draggable from 'react-draggable';

import styles from './TextDraw.module.scss';
import { useDrag } from '../../hooks/drag.hook';
import { useResize } from '../../hooks/resize.hook';
import { NameComponent } from '../../core/component/name';
import { TTextDrawComponentProps } from '../../core/utils/types/props/textdrawComponenetProps.type';
import { useActive } from '../../hooks/active.hook';


export default function TextDrawComponent(props: TTextDrawComponentProps) {
  const elementRef = useRef() as any;
  const [textdraw] = useState(props.textdraw);
  const textdrawName = useMemo(() => textdraw.getComponent(NameComponent), [textdraw]);

  const { isActive } = useActive(textdraw, elementRef);
  const { x, y, minX, maxX, minY, maxY, onDrag } = useDrag(textdraw, props.parentRef);
  const { width, height, minWidth, maxWidth, minHeight, maxHeight, isResizing, setIsResizing, onResize } = useResize(textdraw, props.parentRef);

  return (
    <>
      <Draggable
        onDrag={onDrag}
        disabled={isResizing}
        defaultPosition={{ x: x, y: y }}
        bounds={{ left: minX, right: maxX, top: minY, bottom: maxY }}
      >
        <div
          id={textdraw.id}
          ref={elementRef}
          className={`textdraw ${styles.textdraw} ${isActive ? styles['textdraw--active'] : ''}`}
          style={{
            width: width,
            height: height
          }}
        >
          <div className={styles['textdraw__meta']}>
            [{textdrawName?.name}]
            {!isResizing && ` (x: ${x}, y: ${y})`}
            {isResizing && ` (width: ${width}, height: ${height})`}
          </div>

          <ResizableBox
            onResize={onResize}
            onResizeStop={() => setIsResizing(false)}
            handleSize={[8, 8]}
            width={width}
            height={height}
            minConstraints={[minWidth, minHeight]} maxConstraints={[maxWidth, maxHeight]}
            className={styles['textdraw__resizer']}
            handle={<span
              className={styles['handle']}
              onMouseEnter={() => setIsResizing(true)}
              onMouseLeave={() => setIsResizing(false)}
            />}>
          </ResizableBox>
        </div>
      </Draggable>
    </>
  )
}