import { CSSProperties, useMemo, useState } from 'react';
import Draggable from 'react-draggable';
import { ResizableBox } from 'react-resizable';

import { BoxComponent } from '../../core/component/box';
import { useTextdraw } from '../../hooks/textdraw.hook';
import { NameComponent } from '../../core/component/name';
import { TextComponent } from '../../core/component/text';
import { useDraggable } from '../../hooks/draggable.hook';
import { useResizeable } from '../../hooks/resizeable.hook';
import { HighlightComponent } from '../../core/component/highlight';
import { TTextDrawComponentProps } from '../../core/utils/types/props/textdrawComponenetProps.type';


export default function TextDrawComponent(props: TTextDrawComponentProps) {
  const [textdraw] = useState(props.textdraw);
  const textdrawBox = useMemo(() => textdraw.getComponent(BoxComponent), [textdraw]);
  const textdrawText = useMemo(() => textdraw.getComponent(TextComponent), [textdraw]);
  const textdrawName = useMemo(() => textdraw.getComponent(NameComponent), [textdraw]);
  const textdrawHighlight = useMemo(() => textdraw.getComponent(HighlightComponent), [textdraw]);

  const { width, height, isResizing, props: resizeableProps } = useResizeable(textdraw, props.parentRef);
  const { x, y, props: draggableProps } = useDraggable(textdraw, props.parentRef, isResizing);
  const { textdrawClasses, metaClasses, textClasses } = useTextdraw(textdraw);

  const textdrawStyles: CSSProperties = {
    width,
    height,
    color: textdrawText?.textColor,
    backgroundColor: textdrawBox?.useBox ? textdrawBox?.boxColor : 'transparent'
  };

  const textdrawTextStyles: CSSProperties = {
    fontSize: 40,
    WebkitTextStrokeColor: textdrawHighlight?.highlightColor,
    WebkitTextStrokeWidth: Math.max(textdrawHighlight?.outlineSize ?? 0, textdrawHighlight?.shadowSize ?? 0) * 2
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

          {textdrawText &&
            <div className={textClasses} style={textdrawTextStyles}>
              {textdrawText?.text}
            </div>
          }

          {!textdrawText && <ResizableBox {...resizeableProps} ></ResizableBox>}
        </div>
      </Draggable >
    </>
  )
}