import { Component } from '.';
import { TBoxProps } from '../utils/types/props/boxProps.type';


/**
 * @description
 * The box of the entity on the screen
 */
export class BoxComponent extends Component {

  /**
   * @description
   * The box color of the entity
   */
  boxColor: string;

  /**
   * @description
   * The box state of the entity
   */
  useBox: boolean;

  constructor(props?: Partial<TBoxProps>) {
    super();

    this.useBox = props?.useBox ?? true;
    this.boxColor = props?.boxColor ?? '#000000AA';
  }
}