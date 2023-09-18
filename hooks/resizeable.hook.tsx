import styles from './../components/textdraw/TextDraw.module.scss';

import { MutableRefObject, useMemo, useState } from 'react';

import { useResize } from './resize.hook';
import { TextDraw } from '../core/entity/textdraw';
import { TextComponent } from '../core/component/text';
import { resizeDirections } from '../core/utils/const/resizeDirections.const';
import { ResizeDirection } from '../core/utils/enums/resizeDirection.enum';


/**
 * @description
 * Returns resizeable component props
 *
 * @param textdraw The target textdraw to resize
 * @param parentRef The parent element
 */
export function useResizeable(textdraw: TextDraw, parentRef: MutableRefObject<HTMLDivElement>) {
  const textdrawtext = useMemo(() => textdraw.getComponent(TextComponent), [textdraw]);
  const { width, height, minWidth, maxWidth, minHeight, maxHeight, isResizing, setIsResizing, onResize } = useResize(textdraw, parentRef);
  const [resizeAngle, setResizeAngle] = useState('se');

  const resizeableSize = {
    width: textdrawtext ? 0 : width,
    height: textdrawtext ? 0 : height
  };

  const resizeableConstrains: { minConstraints: [number, number], maxConstraints: [number, number] } = {
    minConstraints: [minWidth, minHeight],
    maxConstraints: [maxWidth, maxHeight]
  };

  const onMouseEnter = (direction: ResizeDirection) => {
    setIsResizing(true);
    setResizeAngle(direction);
  }

  const onMouseLeave = () => {
    setIsResizing(false);
  }

  const resizeableHandle: any = {
    handleSize: [10, 10],
    resizeHandles: [resizeAngle],
    axis: textdrawtext ? 'none' : 'both',
    handle: !textdrawtext && <div>
      {resizeDirections.all.map((direction, index) =>
        <span
          key={index}
          onMouseLeave={() => onMouseLeave()}
          onMouseEnter={() => onMouseEnter(direction)}
          className={`${styles['handle']} ${styles[`handle--${direction}`]}`}
        />
      )}
    </div>
  };

  const resizeableCallbacks = {
    onResize,
    onResizeStop: () => setIsResizing(false)
  };

  return {
    width,
    height,
    isResizing,
    setIsResizing,
    props: {
      ...resizeableSize,
      ...resizeableHandle,
      ...resizeableCallbacks,
      ...resizeableConstrains,
      lockAspectRatio: false,
      className: styles['textdraw__resizer']
    }
  };
}