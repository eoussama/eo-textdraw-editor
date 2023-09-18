import { Board } from '../entity/board';
import { useBoardStore } from '../store/board';

import { TNullable } from '../utils/types/generic/nullable.type';
import { TBoardProps } from '../utils/types/props/boardProps.type';


/**
 * @description
 * The board manager
 */
export class BoardSystem {

  /**
   * @description
   * Creates a new board
   *
   * @param props The board props to create
   */
  static create(props: Partial<TBoardProps>): Board {
    const boards = useBoardStore.getState().boards;
    const setBoards = useBoardStore.getState().setBoards;
    const board = new Board({ ...props });

    setBoards([...boards, board]);

    return board;
  }

  /**
   * @description
   * Updates a board
   *
   * @param newBoard The board to set
   */
  static update(newBoard: Board): void {
    const boards = useBoardStore.getState().boards;
    const setBoards = useBoardStore.getState().setBoards;
    const newBoardIndex = boards.findIndex(b => b.id === newBoard.id);

    const start = boards.slice(0, newBoardIndex);
    const current = newBoard;
    const end = boards.slice(newBoardIndex + 1);

    const newBoards = [...start, current, ...end];

    setBoards(newBoards);
    if (newBoard?.id === this.getActive()?.id) {
      this.setActive(newBoard.id);
    }
  }

  /**
   * @description
   * Retreives a board by ID
   *
   * @param boardId The ID of the board to get
   */
  static get(boardId: TNullable<string>): TNullable<Board> {
    const boards = useBoardStore.getState().boards;
    return boards.find(b => b.id === boardId) ?? null;
  }

  /**
   * @description
   * Sets a board as active
   *
   * @param boardId The ID of the board to set active
   */
  static setActive(boardId: TNullable<string>): void {
    const board = this.get(boardId);
    const setActiveId = useBoardStore.getState().setActive;

    setActiveId(board);
  }

  /**
   * @description
   * Retuns the active board
   */
  static getActive(): TNullable<Board> {
    return useBoardStore.getState().active;
  }

  /**
   * @description
   * Reset a board
   *
   * @param boardId The ID of the board to reset
   */
  static reset(boardId: string): void {
    const board = this.get(boardId);

    if (board) {
      board.textdraws = [];
      this.update(board);
    }
  }

  /**
   * @description
   * Initializes the boards
   */
  static init(): void {
    const setBoards = useBoardStore.getState().setBoards;
    const setActiveId = useBoardStore.getState().setActive;

    setBoards([]);
    setActiveId(null);
  }
}