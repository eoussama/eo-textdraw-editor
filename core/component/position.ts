import { Component } from '.';
import { clamp } from '../utils/helpers/math/clamp.helper';
import { TPositionProps } from '../utils/types/props/positionProps.type';


/**
 * @description
 * The position of the entity on the screen
 */
export class PositionComponent extends Component {

  /**
   * @description
   * The position of the element on the X axis
   */
  posX: number;

  /**
   * @description
   * The position of the element on the Y axis
   */
  posY: number;

  constructor(props?: Partial<TPositionProps>) {
    super();

    this.posX = clamp(props?.posX ?? 0, 0);
    this.posY = clamp(props?.posY ?? 0, 0);
  }
}