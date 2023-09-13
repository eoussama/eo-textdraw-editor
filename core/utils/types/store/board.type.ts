import { Board } from '../../../entity/board';
import { TNullable } from '../generic/nullable.type';


/**
 * @description
 * The board state
 */
export type TBoardState = {

  /**
   * @description
   * The list of loaded boards
   */
  boards: Array<Board>

  /**
   * @description
   * The the active board
   */
  active: TNullable<Board>
}

/**
 * @description
 * The board actions
 */
export type TBoardAction = {

  /**
   * @description
   * Sets the list of boards
   *
   * @param boards The boards to set
   */
  setBoards: (boards: Array<Board>) => void

  /**
   * @description
   * Sets a board as active
   *
   * @param boardId The board to set as active
   */
  setActive: (board: TNullable<Board>) => void
}