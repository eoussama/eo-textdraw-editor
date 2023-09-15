import { useMemo, useState } from 'react';
import Draggable from 'react-draggable';
import { ResizableBox } from 'react-resizable';

import styles from './TextDraw.module.scss';
import { useActive } from '../../hooks/active.hook';
import { BoxComponent } from '../../core/component/box';
import { NameComponent } from '../../core/component/name';
import { TextComponent } from '../../core/component/text';
import { useDraggable } from '../../hooks/draggable.hook';
import { useResizeable } from '../../hooks/resizeable.hook';
import { TTextDrawComponentProps } from '../../core/utils/types/props/textdrawComponenetProps.type';


export default function TextDrawComponent(props: TTextDrawComponentProps) {
  const [textdraw] = useState(props.textdraw);
  const textdrawBox = useMemo(() => textdraw.getComponent(BoxComponent), [textdraw]);
  const textdrawtext = useMemo(() => textdraw.getComponent(TextComponent), [textdraw]);
  const textdrawName = useMemo(() => textdraw.getComponent(NameComponent), [textdraw]);

  const { width, height, isResizing, props: resizeableProps } = useResizeable(textdraw, props.parentRef);
  const { x, y, props: draggableProps } = useDraggable(textdraw, props.parentRef, isResizing);
  const { isActive } = useActive(textdraw, draggableProps.nodeRef);

  const textdrawStyles = {
    width,
    height,
    backgroundColor: textdrawBox?.useBox ? textdrawBox?.boxColor : 'transparent'
  };

  const textdrawClasses = [
    'textdraw',
    styles['textdraw'],
    isActive ? styles['textdraw--active'] : '',
    textdrawtext ? styles['textdraw--text'] : styles['textdraw--box']
  ].join(' ');

  const metaClasses = [
    'textdraw__meta',
    styles['textdraw__meta']
  ].join(' ');

  const textClasses = [
    'textdraw__text',
    styles['textdraw__text']
  ].join(' ');

  return (
    <>
      <Draggable {...draggableProps}>
        <div
          id={textdraw.id}
          style={textdrawStyles}
          className={textdrawClasses}
          ref={draggableProps.nodeRef}
        >
          <div className={metaClasses}>
            [{textdrawName?.name}]
            {isResizing ? ` (width: ${width}, height: ${height})` : ` (x: ${x}, y: ${y})`}
          </div>

          {textdrawtext &&
            <div className={textClasses}>
              {textdrawtext?.text}
            </div>
          }

          {!textdrawtext && <ResizableBox {...resizeableProps} ></ResizableBox>}
        </div>
      </Draggable >
    </>
  )
}