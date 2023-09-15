import { Component } from '.';
import { TAnchorProps } from '../utils/types/props/anchorProps.type';
import { TTextDrawAlignment } from '../utils/enums/textdrawAlignment.enum';


/**
 * @description
 * The alignment of the entity on the screen
 */
export class AnchorComponent extends Component {

  /**
   * @description
   * The alignment of the entity
   */
  alignment: TTextDrawAlignment;

  constructor(props?: Partial<TAnchorProps>) {
    super();
    this.alignment = props?.alignment ?? TTextDrawAlignment.Left;
  }
}