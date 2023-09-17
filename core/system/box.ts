import { TextDraw } from '../entity/textdraw';
import { TextComponent } from '../component/text';
import { BoxComponent } from '../component/box';


/**
 * @description
 * Helps with box components
 */
export class BoxSystem {

  /**
   * @description
   * Figures out CSS styling for targeted textdraw
   *
   * @param textdraw The target textdraw
   */
  static getStyle(textdraw: TextDraw) {
    if (textdraw.hasComponent(BoxComponent)) {
      const textdrawBox = textdraw.getComponent(BoxComponent);

      return {
        backgroundColor: textdrawBox?.useBox ? textdrawBox?.boxColor : 'transparent'
      };
    }

    return { backgroundColor: 'transparent' };
  }
}