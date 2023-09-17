import { TextDraw } from '../entity/textdraw';
import { SizeComponent } from '../component/size';


/**
 * @description
 * Helps with size components
 */
export class SizeSystem {

  /**
   * @description
   * Returns the meta label for the size component
   *
   * @param textdraw The target textdraw
   */
  static getMeta(textdraw: TextDraw) {
    if (textdraw.hasComponent(SizeComponent)) {
      const textdrawBox = textdraw.getComponent(SizeComponent);
      const width = textdrawBox?.sizeWidth?.toFixed(2) ?? 0;
      const height = textdrawBox?.sizeHeight?.toFixed(2) ?? 0;

      return `(width: ${width}, height: ${height})`;
    }

    return '';
  }
}