import styles from './../components/textdraw/TextDraw.module.scss';
import { useMemo } from 'react';
import { useActive } from './active.hook';
import { TextDraw } from '../core/entity/textdraw';
import { TextComponent } from '../core/component/text';
import { TextDrawFont } from '../core/utils/enums/textdrawFont.enum';
import { formatClasses } from '../core/utils/helpers/string/css.helper';
import { textDrawFontClasses } from '../core/utils/const/textdrawFontClasses.const';


/**
 * @description
 * Returns textdraw classes and styles
 *
 * @param textdraw The target textdraw
 */
export function useTextdraw(textdraw: TextDraw) {
  const { isActive } = useActive(textdraw);
  const textdrawtext = useMemo(() => textdraw.getComponent(TextComponent), [textdraw]);

  const textDrawActiveClass = isActive ? styles['textdraw--active'] : '';
  const textdrawTextClass = textdrawtext ? styles['textdraw--text'] : styles['textdraw--box'];

  const fontClassKey = textDrawFontClasses[textdrawtext?.font ?? TextDrawFont.Normal];
  const fontClass = styles[`textdraw--font-${fontClassKey}`];

  const metaClasses = formatClasses('textdraw__meta', styles['textdraw__meta']);
  const textClasses = formatClasses('textdraw__text', styles['textdraw__text'], fontClass);
  const textdrawClasses = formatClasses('textdraw', styles['textdraw'], textDrawActiveClass, textdrawTextClass);

  return {
    metaClasses,
    textClasses,
    textdrawClasses,
  }
}