import { useMemo, useRef, useState } from 'react';
import { ResizableBox } from 'react-resizable';
import Draggable from 'react-draggable';

import styles from './TextDraw.module.scss';
import { useDrag } from '../../hooks/drag.hook';
import { useActive } from '../../hooks/active.hook';
import { BoxComponent } from '../../core/component/box';
import { NameComponent } from '../../core/component/name';
import { TextComponent } from '../../core/component/text';
import { TTextDrawComponentProps } from '../../core/utils/types/props/textdrawComponenetProps.type';
import { useResizeable } from '../../hooks/resizeable.hook';
import { useDraggable } from '../../hooks/draggable.hook';


export default function TextDrawComponent(props: TTextDrawComponentProps) {
  const [textdraw] = useState(props.textdraw);
  const textdrawBox = useMemo(() => textdraw.getComponent(BoxComponent), [textdraw]);
  const textdrawtext = useMemo(() => textdraw.getComponent(TextComponent), [textdraw]);
  const textdrawName = useMemo(() => textdraw.getComponent(NameComponent), [textdraw]);

  const { width, height, isResizing, props: resizeableProps } = useResizeable(textdraw, props.parentRef);
  const { x, y, props: draggableProps } = useDraggable(textdraw, props.parentRef, isResizing);
  const { isActive } = useActive(textdraw, draggableProps.nodeRef);

  const textdrawStyles = {
    width: width,
    height: height,
    backgroundColor: textdrawBox?.useBox ? textdrawBox?.boxColor : 'transparent'
  };

  const textdrawActiveClass = `${isActive ? styles['textdraw--active'] : ''}`;
  const textdrawTypeClass = `${textdrawtext ? styles['textdraw--text'] : styles['textdraw--box']}`;
  const textdrawClasses = `textdraw ${styles['textdraw']} ${textdrawActiveClass} ${textdrawTypeClass}`;

  return (
    <>
      <Draggable {...draggableProps}>
        <div
          id={textdraw.id}
          style={textdrawStyles}
          className={textdrawClasses}
          ref={draggableProps.nodeRef}
        >
          <div className={styles['textdraw__meta']}>
            [{textdrawName?.name}]
            {isResizing ? ` (width: ${width}, height: ${height})` : ` (x: ${x}, y: ${y})`}
          </div>

          {textdrawtext &&
            <div className={styles['textdraw__text']}>
              {textdrawtext?.text}
            </div>
          }

          {!textdrawtext && <ResizableBox {...resizeableProps} ></ResizableBox>}
        </div>
      </Draggable >
    </>
  )
}