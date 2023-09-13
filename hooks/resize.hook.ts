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
      textdrawSize.width = size.width;
      textdrawSize.height = size.height;
    }

    setIsResizing(true);
    TextdrawSystem.update(textdraw);
  };

  useEffect(() => {
    const bounds = parentRef.current.getBoundingClientRect();

    if (textdrawPos) {
      setMinWidth(10);
      setMinHeight(10);
      setMaxWidth(bounds.width - textdrawPos.x);
      setMaxHeight(bounds.height - textdrawPos.y);
    }
  }, [textdrawPos?.x, textdrawPos?.y]);

  return { minWidth, maxWidth, minHeight, maxHeight, isResizing, width: textdrawSize?.width ?? 0, height: textdrawSize?.height ?? 0, setIsResizing, onResize };
}