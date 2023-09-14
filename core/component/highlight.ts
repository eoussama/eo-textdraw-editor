import { Component } from '.';
import { THighlightProps } from '../utils/types/props/highlightProps.type';


/**
 * @description
 * The highlight of the entity on the screen
 */
export class HighlightComponent extends Component {

  /**
   * @description
   * The size of the outline of the entity
   */
  outlineSize: number;

  /**
   * @description
   * The size of the shadow of the entity
   */
  shadowSize: number;

  /**
   * @description
   * The color of the highlight of the entity
   */
  highlightColor: string;

  constructor(props?: Partial<THighlightProps>) {
    super();

    this.shadowSize = props?.shadowSize ?? 0;
    this.outlineSize = props?.outlineSize ?? 0;
    this.highlightColor = props?.highlightColor ?? '#ffffff00';
  }
}