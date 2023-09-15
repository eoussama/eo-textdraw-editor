import styles from './../components/textdraw/TextDraw.module.scss';
import { MutableRefObject, useMemo } from 'react';
import { useResize } from './resize.hook';
import { TextDraw } from '../core/entity/textdraw';
import { TextComponent } from '../core/component/text';


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

  const resizeableSize = {
    width: textdrawtext ? 0 : width,
    height: textdrawtext ? 0 : height
  };

  const resizeableConstrains: { minConstraints: [number, number], maxConstraints: [number, number] } = {
    minConstraints: [minWidth, minHeight],
    maxConstraints: [maxWidth, maxHeight]
  };

  const resizeableHandle: any = {
    handleSize: [8, 8],
    handle: !textdrawtext &&
      <span
        className={styles['handle']}
        onMouseEnter={() => setIsResizing(true)}
        onMouseLeave={() => setIsResizing(false)}
      />
  };

  const resizeableCallbacks = {
    onResize,
    onResizeStop: () => setIsResizing(false)
  };

  return {
    width,
    height,
    isResizing,
    props: {
      ...resizeableSize,
      ...resizeableHandle,
      ...resizeableCallbacks,
      ...resizeableConstrains,
      className: styles['textdraw__resizer']
    }
  };
}