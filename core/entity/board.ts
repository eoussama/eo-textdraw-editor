import { Entity } from '.';
import { TextDraw } from './textdraw';
import { SizeComponent } from '../component/size';
import { TBoardProps } from '../utils/types/props/boardProps.type';


/**
 * @description
 * The board entity
 */
export class Board extends Entity {

  /**
   * @description
   * The collection of layers
   */
  textdraws: Array<TextDraw>;

  constructor(props?: Partial<TBoardProps>) {
    super(props);

    this.textdraws = props?.textdraws ?? [];
    this.addComponent(new SizeComponent(props));
  }
}