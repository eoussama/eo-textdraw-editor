import { TextDraw } from '../../../entity/textdraw';
import { TNullable } from '../generic/nullable.type';


/**
 * @description
 * The textdraw state
 */
export type TTextDrawState = {

  /**
   * @description
   * The the active textdraw
   */
  active: TNullable<TextDraw>
}

/**
 * @description
 * The textdraw actions
 */
export type TTextDrawAction = {

  /**
   * @description
   * Sets a textdraw as active
   *
   * @param boardId The textdraw to set as active
   */
  setActive: (board: TNullable<TextDraw>) => void
}