import { CSSProperties, useMemo, useState } from 'react';
import Draggable from 'react-draggable';
import { ResizableBox } from 'react-resizable';

import { BoxComponent } from '../../core/component/box';
import { useTextdraw } from '../../hooks/textdraw.hook';
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
  const { textdrawClasses, metaClasses, textClasses } = useTextdraw(textdraw);

  const textdrawStyles: CSSProperties = {
    width,
    height,
    color: textdrawtext?.textColor,
    backgroundColor: textdrawBox?.useBox ? textdrawBox?.boxColor : 'transparent'
  };

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