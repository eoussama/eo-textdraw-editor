import { Board } from '../entity/board';
import { TextDraw } from '../entity/textdraw';
import { TClassType } from '../utils/types/generic/class.type';
import { TTextDrawProps } from '../utils/types/props/textdrawProps.type';
import { BoardSystem } from './board';


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
   * @param props The default properties
   */
  static create<T extends TextDraw, U extends TTextDrawProps>(board: Board, textdrawType: TClassType<T>, props: Partial<U>): T {
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
}