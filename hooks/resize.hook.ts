import { MutableRefObject, SyntheticEvent, useEffect, useMemo, useState } from 'react';
import { TextDraw } from '../core/entity/textdraw';
import { SizeComponent } from '../core/component/size';
import { PositionComponent } from '../core/component/position';
import { TextdrawSystem } from '../core/system/textdraw';


/**
 * @description
 * Helps with resizing
 *
 * @param textdraw The target textdraw to resize
 * @param parentRef The parent element
 */
export function useResize(textdraw: TextDraw, parentRef: MutableRefObject<HTMLDivElement>) {
  const textdrawSize = useMemo(() => textdraw.getComponent(SizeComponent), [textdraw]);
  const textdrawPos = useMemo(() => textdraw.getComponent(PositionComponent), [textdraw]);

  const [minWidth, setMinWidth] = useState(0);
  const [maxWidth, setMaxWidth] = useState(0);
  const [minHeight, setMinHeight] = useState(0);
  const [maxHeight, setMaxHeight] = useState(0);
  const [isResizing, setIsResizing] = useState(false);

  const onResize = (_: SyntheticEvent<Element, Event>, e: any) => {
    const { size } = e;

    if (textdrawSize) {
      textdrawSize.sizeWidth = size.width;
      textdrawSize.sizeHeight = size.height;
    }

    setIsResizing(true);
    TextdrawSystem.update(textdraw);
  };

  useEffect(() => {
    const bounds = parentRef.current.getBoundingClientRect();

    if (textdrawPos) {
      setMinWidth(10);
      setMinHeight(10);
      setMaxWidth(bounds.width - textdrawPos.posX);
      setMaxHeight(bounds.height - textdrawPos.posY);
    }
  }, [textdrawPos?.posX, textdrawPos?.posY]);

  return { minWidth, maxWidth, minHeight, maxHeight, isResizing, width: textdrawSize?.sizeWidth ?? 0, height: textdrawSize?.sizeHeight ?? 0, setIsResizing, onResize };
}