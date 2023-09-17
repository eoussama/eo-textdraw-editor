import { TextDraw } from '../entity/textdraw';
import { TextComponent } from '../component/text';


/**
 * @description
 * Helps with highlight components
 */
export class TextSystem {

  /**
   * @description
   * Figures out CSS styling for targeted textdraw
   *
   * @param textdraw The target textdraw
   */
  static getStyle(textdraw: TextDraw) {
    if (textdraw.hasComponent(TextComponent)) {
      const textdrawText = textdraw.getComponent(TextComponent);

      return {
        fontSize: 60,
        color: textdrawText?.textColor ?? '#FFFFFFFF'
      };
    }

    return {};
  }
}