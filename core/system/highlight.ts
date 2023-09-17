import { TextDraw } from '../entity/textdraw';
import { TextComponent } from '../component/text';
import { HighlightComponent } from '../component/highlight';


/**
 * @description
 * Helps with highlight components
 */
export class HighlightSystem {

  /**
   * @description
   * Figures out CSS styling for targeted textdraw
   *
   * @param textdraw The target textdraw
   */
  static getStyle(textdraw: TextDraw) {
    if (textdraw.hasComponent(HighlightComponent, TextComponent)) {
      const textdrawHighlight = textdraw.getComponent(HighlightComponent);
      const color = textdrawHighlight?.highlightColor ?? 'transparent';
      const thickness = Math.max(textdrawHighlight?.outlineSize ?? 0, textdrawHighlight?.shadowSize ?? 0) * 2;

      return { WebkitTextStrokeColor: color, WebkitTextStrokeWidth: thickness }
    }

    return {};
  }
}