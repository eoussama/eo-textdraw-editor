import { Component } from '.';
import { clamp } from '../utils/helpers/math/clamp.helper';


/**
 * @description
 * The size of the entity on the screen
 */
export class SizeComponent extends Component {

  /**
   * @description
   * The width of the textdraw
   */
  width: number;

  /**
   * @description
   * The height of the textdraw
   */
  height: number;

  constructor(width?: number, height?: number) {
    super();
  
    this.width = clamp(width ?? 0, 0);
    this.height = clamp(height ?? 0, 0);
  }
}