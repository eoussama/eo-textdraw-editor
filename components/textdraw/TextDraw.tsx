import { CSSProperties, useMemo } from 'react';

import Draggable from 'react-draggable';
import { ResizableBox } from 'react-resizable';

import { TextComponent } from '../../core/component/text';
import { NameComponent } from '../../core/component/name';

import { useTextdraw } from '../../hooks/textdraw.hook';
import { useDraggable } from '../../hooks/draggable.hook';
import { useResizeable } from '../../hooks/resizeable.hook';

import { BoxSystem } from '../../core/system/box';
import { TextSystem } from '../../core/system/text';
import { SizeSystem } from '../../core/system/size';
import { PositionSystem } from '../../core/system/position';
import { HighlightSystem } from '../../core/system/highlight';

import { TTextDrawComponentProps } from '../../core/utils/types/props/textdrawComponenetProps.type';


export default function TextDrawComponent(props: TTextDrawComponentProps) {
  const { textdraw } = props;

  const textdrawText = useMemo(() => textdraw.getComponent(TextComponent), [textdraw]);
  const textdrawName = useMemo(() => textdraw.getComponent(NameComponent), [textdraw]);

  const { width, height, isResizing, props: resizeableProps } = useResizeable(textdraw, props.parentRef);
  const { textdrawClasses, metaClasses, textClasses } = useTextdraw(textdraw);
  const { props: draggableProps } = useDraggable(textdraw, isResizing);

  const metaLabel = useMemo(() => `[${textdrawName?.name}]`, [textdraw]);
  const metaValue = useMemo(() => ' ' + (isResizing ? SizeSystem.getMeta(textdraw) : PositionSystem.getMeta(textdraw)), [isResizing, textdraw]);

  const textdrawStyles: CSSProperties = {
    width,
    height,
    ...BoxSystem.getStyle(textdraw),
  };

  const textdrawTextStyles = {
    ...TextSystem.getStyle(textdraw),
    ...HighlightSystem.getStyle(textdraw)
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
            {metaLabel}
            {metaValue}
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