import { useRef } from 'react';
import { useDrag } from './drag.hook';
import { TextDraw } from '../core/entity/textdraw';


/**
 * @description
 * Returns draggable component props
 *
 * @param textdraw The target textdraw to drag
 * @param isResizing If the textdraw is being resized
 */
export function useDraggable(textdraw: TextDraw, isResizing: boolean) {
  const elementRef = useRef() as any;
  const { x, y, onDrag } = useDrag(textdraw);

  const draggablePosition = { x, y };
  const draggableCallbacks = { onDrag };

  return {
    x,
    y,
    props: {
      ...draggableCallbacks,
      scale: 1,
      bounds: 'parent',
      nodeRef: elementRef,
      disabled: isResizing,
      defaultPosition: draggablePosition,
      position: isResizing ? { x, y } : undefined
    }
  };
}