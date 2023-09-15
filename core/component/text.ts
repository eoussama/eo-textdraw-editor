import { Component } from '.';
import { TextDrawFont } from '../utils/enums/textdrawFont.enum';
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
  text: string;

  /**
   * @description
   * The font of the text of the entity
   */
  font: TextDrawFont;

  /**
   * @description
   * The text color of the entity
   */
  textColor: string;

  constructor(props?: Partial<TTextProps>) {
    super();

    this.text = props?.text ?? 'Text';
    this.font = props?.font ?? TextDrawFont.Normal;
    this.textColor = props?.textColor ?? '#FFFFFFFF';
  }
}