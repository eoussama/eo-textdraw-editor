import { Component } from '.';
import { clamp } from '../utils/helpers/math/clamp.helper';
import { TSizeProps } from '../utils/types/props/sizeProps.type';


/**
 * @description
 * The size of the entity on the screen
 */
export class SizeComponent extends Component {

  /**
   * @description
   * The width of the textdraw
   */
  sizeWidth: number;

  /**
   * @description
   * The height of the textdraw
   */
  sizeHeight: number;

  constructor(props?: Partial<TSizeProps>) {
    super();
  
    this.sizeWidth = clamp(props?.sizeWidth ?? 0, 0);
    this.sizeHeight = clamp(props?.sizeHeight ?? 0, 0);
  }
}