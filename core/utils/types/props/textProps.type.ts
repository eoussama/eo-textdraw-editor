import { TextDrawFont } from '../../enums/textdrawFont.enum'


/**
 * @description
 * Text component properties
 */
export type TTextProps = {

  /**
   * @description
   * The text of the entity
   */
  text: string

  /**
   * @description
   * The font of the text of the entity
   */
  font: TextDrawFont

  /**
   * @description
   * The text color of the entity
   */
  textColor: string
}