import { MutableRefObject, useRef } from 'react';
import { useDrag } from './drag.hook';
import { TextDraw } from '../core/entity/textdraw';


/**
 * @description
 * Returns draggable component props
 *
 * @param textdraw The target textdraw to drag
 * @param parentRef The parent element
 * @param isResizing If the textdraw is being resized
 */
export function useDraggable(textdraw: TextDraw, parentRef: MutableRefObject<HTMLDivElement>, isResizing: boolean) {
  const elementRef = useRef() as any;
  const { x, y, minX, maxX, minY, maxY, onDrag } = useDrag(textdraw, parentRef);

  const draggablePosition = { x, y };
  const draggableBounds = { left: minX, right: maxX, top: minY, bottom: maxY };

  const draggableCallbacks = {
    onDrag
  };

  return {
    x,
    y,
    props: {
      ...draggableCallbacks,
      nodeRef: elementRef,
      disabled: isResizing,
      bounds: draggableBounds,
      defaultPosition: draggablePosition,
    }
  };
}