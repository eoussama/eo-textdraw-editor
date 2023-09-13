import { Component } from '.';
import { clamp } from '../utils/helpers/math/clamp.helper';


/**
 * @description
 * The position of the entity on the screen
 */
export class PositionComponent extends Component {

  /**
   * @description
   * The position of the element on the X axis
   */
  x: number;

  /**
   * @description
   * The position of the element on the Z axis
   */
  y: number;

  constructor(x?: number, y?: number) {
    super();
  
    this.x = clamp(x ?? 0, 0);
    this.y = clamp(y ?? 0, 0);
  }
}