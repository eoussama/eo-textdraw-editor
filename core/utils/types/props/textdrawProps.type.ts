import { TextDrawScope } from '../../enums/textdrawScope.enum';


/**
 * @description
 * Textdraw properties
 */
export type TTextDrawProps = {
  
  /**
   * @description
   * The ID of the textdraw
   */
  id: string

  /**
   * @description
   * The name of the textdraw
   */
  name: string

  /**
   * @description
   * The width of the textdraw
   */
  width: number

  /**
   * @description
   * The height of the textdraw
   */
  height: number

  /**
   * @description
   * The X position of the textdraw
   */
  x: number

  /**
   * @description
   * The y position of the textdraw
   */
  y: number

  /**
   * @description
   * The scope of the textdraw
   */
  scope: TextDrawScope
}