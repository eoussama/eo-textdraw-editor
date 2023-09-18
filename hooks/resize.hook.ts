import { MutableRefObject, SyntheticEvent, useEffect, useMemo, useState } from 'react';

import { TextDraw } from '../core/entity/textdraw';
import { resizeDirections } from '../core/utils/const/resizeDirections.const';

import { SizeComponent } from '../core/component/size';
import { TextComponent } from '../core/component/text';
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
  const isText = useMemo(() => textdraw.hasComponent(TextComponent), [textdraw]);
  const textdrawSize = useMemo(() => textdraw.getComponent(SizeComponent), [textdraw]);
  const textdrawPos = useMemo(() => textdraw.getComponent(PositionComponent), [textdraw]);

  const [minWidth, setMinWidth] = useState(0);
  const [maxWidth, setMaxWidth] = useState(0);
  const [minHeight, setMinHeight] = useState(0);
  const [maxHeight, setMaxHeight] = useState(0);
  const [isResizing, setIsResizing] = useState(false);

  const onResize = (_: SyntheticEvent<Element, Event>, e: any) => {
    const { size, handle } = e;
    setIsResizing(true);

    if (textdrawSize && textdrawPos) {
      let newLeft = textdrawPos.posX;
      let newTop = textdrawPos.posY;

      if (resizeDirections.sensitive.includes(handle)) {
        if (handle.indexOf('n') > -1) {
          const deltaHeight = size.height - textdrawSize.sizeHeight;
          newTop -= deltaHeight;
        }

        if (handle.indexOf('w') > -1) {
          const deltaWidth = size.width - textdrawSize.sizeWidth;
          newLeft -= deltaWidth;
        }
      }

      textdrawPos.posX = newLeft;
      textdrawPos.posY = newTop;
      textdrawSize.sizeWidth = size.width;
      textdrawSize.sizeHeight = size.height;
    }

    TextdrawSystem.update(textdraw);
  };

  useEffect(() => {
    if (isText && textdrawSize) {
      const selector = `#${CSS.escape(textdraw.id)} .textdraw__text`;
      const currentElement = document.querySelector(selector);
      const boundigRect = currentElement?.getBoundingClientRect();
      const elementWidth = boundigRect?.width ?? textdrawSize?.sizeWidth ?? 10;
      const elementHeight = boundigRect?.height ?? textdrawSize?.sizeHeight ?? 10;

      textdrawSize.sizeWidth = elementWidth;
      textdrawSize.sizeHeight = elementHeight;

      TextdrawSystem.update(textdraw);
    }
  }, [isText]);

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