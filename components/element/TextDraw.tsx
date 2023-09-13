import { useEffect, useMemo, useRef, useState } from 'react';
import { ResizableBox } from 'react-resizable';
import Draggable from 'react-draggable';

import styles from './TextDraw.module.scss'
import { PositionComponent } from '../../core/component/position';
import { SizeComponent } from '../../core/component/size';
import { NameComponent } from '../../core/component/name';
import { TTextDrawComponentProps } from '../../core/utils/types/props/textdrawComponenetProps.type';
import { TextdrawSystem } from '../../core/system/textdraw';


export default function TextDrawComponent(props: TTextDrawComponentProps) {
  const [textdraw] = useState(props.textdraw);
  const textdrawName = useMemo(() => textdraw.getComponent(NameComponent), [textdraw]);
  const textdrawSize = useMemo(() => textdraw.getComponent(SizeComponent), [textdraw]);
  const textdrawPos = useMemo(() => textdraw.getComponent(PositionComponent), [textdraw]);

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
    if (textdrawPos) {
      textdrawPos.x = e.x;
      textdrawPos.y = e.y;
    }

    TextdrawSystem.update(textdraw);
  }

  const onResize = (_: MouseEvent, e: any) => {
    const { size } = e;

    if (textdrawSize) {
      textdrawSize.width = size.width;
      textdrawSize.height = size.height;
    }

    TextdrawSystem.update(textdraw);
  };

  useEffect(() => {
    document.addEventListener('click', e => {
      const currentComponent = elementRef.current as unknown as HTMLDivElement;
      setIsActive(currentComponent == e.target || currentComponent.contains(e.target as any));
    });
  }, []);

  useEffect(() => {
    const bounds = props.parentRef.current.getBoundingClientRect();

    if (textdrawSize) {
      setMinY(0);
      setMinX(bounds.x);
      setMaxX(bounds.width - textdrawSize.width);
      setMaxY(bounds.height - textdrawSize.height);
    }
  }, [textdrawSize?.width, textdrawSize?.height]);

  useEffect(() => {
    const bounds = props.parentRef.current.getBoundingClientRect();

    if (textdrawPos) {
      setMinWidth(10);
      setMinHeight(10);
      setMaxWidth(bounds.width - textdrawPos.x);
      setMaxHeight(bounds.height - textdrawPos.y);
    }
  }, [textdrawPos?.x, textdrawPos?.y]);

  return (
    <>
      <Draggable
        onDrag={onDrag}
        onStart={() => !isResizing}
        defaultPosition={{ x: textdrawPos?.x, y: textdrawPos?.y }}
        bounds={{ left: minX, right: maxX, top: minY, bottom: maxY }}
      >
        <div
          ref={elementRef}
          className={`${styles.textdraw} ${isActive ? styles['textdraw--active'] : ''}`}
          style={{
            width: textdrawSize?.width,
            height: textdrawSize?.height
          }}
        >
          <div className={styles['textdraw__meta']}>
            [{textdrawName?.name}]
            {!isResizing && ` (x: ${textdrawPos?.x}, y: ${textdrawPos?.y})`}
            {isResizing && ` (width: ${textdrawSize?.width}, height: ${textdrawSize?.height})`}
          </div>

          <ResizableBox
            onResize={onResize}
            handleSize={[8, 8]}
            width={textdrawSize?.width}
            height={textdrawSize?.height}
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