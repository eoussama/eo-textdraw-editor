import { PositionComponent } from '../component/position';
import { TextDraw } from '../entity/textdraw';


/**
 * @description
 * Helps with positiion components
 */
export class PositionSystem {

  /**
   * @description
   * Returns the meta label for the position component
   *
   * @param textdraw The target textdraw
   */
  static getMeta(textdraw: TextDraw) {
    if (textdraw.hasComponent(PositionComponent)) {
      const textdrawBox = textdraw.getComponent(PositionComponent);
      const posX = textdrawBox?.posX?.toFixed(2) ?? 0;
      const posY = textdrawBox?.posY?.toFixed(2) ?? 0;

      return `(x: ${posX}, y ${posY})`;
    }

    return '';
  }
}