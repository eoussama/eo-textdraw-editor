import { MutableRefObject, useMemo } from 'react';
import { TextDraw } from '../core/entity/textdraw';
import { TextdrawSystem } from '../core/system/textdraw';
import { PositionComponent } from '../core/component/position';
import { DraggableData, DraggableEvent } from 'react-draggable';


/**
 * @description
 * Helps with drag updates
 *
 * @param textdraw The target textdraw
 */
export function useDrag(textdraw: TextDraw) {
  const textdrawPos = useMemo(() => textdraw.getComponent(PositionComponent), [textdraw]);

  const onDrag = (_: DraggableEvent, data: DraggableData) => {
    if (textdrawPos) {
      textdrawPos.posX = data.x;
      textdrawPos.posY = data.y;
    }

    TextdrawSystem.update(textdraw);
  }

  return { x: textdrawPos?.posX ?? 0, y: textdrawPos?.posY ?? 0, onDrag };
}