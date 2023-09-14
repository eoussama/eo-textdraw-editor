import { BoardSystem } from './board';
import { Board } from '../entity/board';
import { TextDraw } from '../entity/textdraw';
import { TClassType } from '../utils/types/generic/class.type';
import { TNullable } from '../utils/types/generic/nullable.type';
import { TTextDrawProps } from '../utils/types/props/textdrawProps.type';
import { useBoardStore } from '../store/board';
import { useTextDrawStore } from '../store/textdraw';


/**
 * @description
 * Textdraw manager
 */
export class TextdrawSystem {

  /**
   * @description
   * Creates a new textdraw
   *
   * @param textdrawType The class type of the textdraw to create
   * @param board The board to affect the textdraw to
   * @param props The default properties
   */
  static create<T extends TextDraw, U extends TTextDrawProps>(textdrawType: TClassType<T>, board: Board, props: Partial<U>): T {
    const textdraw = new textdrawType(props);

    board.textdraws.push(textdraw);
    BoardSystem.update(board);

    return textdraw;
  }

  /**
   * @description
   * Updates a textdraw
   *
   * @param textdraw The textdtaw to update
   */
  static update(textdraw: TextDraw): void {
    const board = BoardSystem.getActive();

    if (board) {
      const textdraws = board.textdraws;
      const textdrawIndex = textdraws.findIndex(t => t.id === textdraw.id);
      const textdrawClass: TClassType<TextDraw> = textdraw.constructor as any;

      const start = textdraws.slice(0, textdrawIndex);
      const current = new textdrawClass(textdraw.toProps());
      const end = textdraws.slice(textdrawIndex + 1);

      board.textdraws = [...start, current, ...end];
      BoardSystem.update(board);
    }
  }

  /**
   * @description
   * Retreives a textdraw by ID
   *
   * @param textdrawId The ID of the textdraw to return
   */
  static get(textdrawId: string): TNullable<TextDraw> {
    const boards = useBoardStore.getState().boards;
    return boards.flatMap(b => b.textdraws).find(t => t.id === textdrawId) ?? null;
  }

  /**
   * @description
   * Sets a textdraw as active
   *
   * @param textdrawId The ID of the textdraw to set active
   */
  static setActive(textdrawId: TNullable<string>): void {
    const setActive = useTextDrawStore.getState().setActive;

    if (textdrawId) {
      const textdraw = this.get(textdrawId);
      setActive(textdraw);
    } else {
      setActive(null);
    }
  }
}