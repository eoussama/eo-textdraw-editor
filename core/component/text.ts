import { Component } from '.';
import { TTextProps } from '../utils/types/props/textProps.type';


/**
 * @description
 * The box of the entity on the screen
 */
export class TextComponent extends Component {

  /**
   * @description
   * The text of the entity
   */
  text: string

  /**
   * @description
   * The text color of the entity
   */
  textColor: string;

  constructor(props?: Partial<TTextProps>) {
    super();

    this.text = props?.text ?? 'Text';
    this.textColor = props?.textColor ?? '#FFFFFFFF';
  }
}