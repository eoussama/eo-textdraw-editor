import { TextDraw } from '../../../entity/textdraw';


/**
 * @description
 * Board properties
 */
export type TBoardProps = {

  /**
   * @description
   * The ID of the board
   */
  id: string

  /**
   * @description
   * The width of the board
   */
  width: number

  /**
   * @description
   * The height of the board
   */
  height: number

  /**
   * @description
   * The list of textdraws
   */
  textdraws: Array<TextDraw>
}