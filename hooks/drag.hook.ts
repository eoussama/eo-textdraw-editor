import { MutableRefObject, useEffect, useMemo, useState } from 'react';
import { TextDraw } from '../core/entity/textdraw';
import { SizeComponent } from '../core/component/size';
import { TextdrawSystem } from '../core/system/textdraw';
import { PositionComponent } from '../core/component/position';
import { DraggableData, DraggableEvent } from 'react-draggable';


/**
 * @description
 * Helps with drag updates
 *
 * @param textdraw The target textdraw
 * @param parentRef The parent element
 */
export function useDrag(textdraw: TextDraw, parentRef: MutableRefObject<HTMLDivElement>) {
  const textdrawSize = useMemo(() => textdraw.getComponent(SizeComponent), [textdraw]);
  const textdrawPos = useMemo(() => textdraw.getComponent(PositionComponent), [textdraw]);

  const [minX, setMinX] = useState(0);
  const [maxX, setMaxX] = useState(0);
  const [minY, setMinY] = useState(0);
  const [maxY, setMaxY] = useState(0);

  const onDrag = (_: DraggableEvent, data: DraggableData) => {
    if (textdrawPos) {
      textdrawPos.x = data.x;
      textdrawPos.y = data.y;
    }

    TextdrawSystem.update(textdraw);
  }

  useEffect(() => {
    const bounds = parentRef.current.getBoundingClientRect();

    if (textdrawSize) {
      setMinY(0);
      setMinX(bounds.x);
      setMaxX(bounds.width - textdrawSize.width);
      setMaxY(bounds.height - textdrawSize.height);
    }
  }, [textdrawSize?.width, textdrawSize?.height]);

  return { minX, maxX, minY, maxY, x: textdrawPos?.x ?? 0, y: textdrawPos?.y ?? 0, onDrag };
}