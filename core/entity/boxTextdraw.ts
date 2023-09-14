import { TextDraw } from './textdraw';
import { BoxComponent } from '../component/box';
import { TBoxTextDrawProps } from '../utils/types/props/boxTextdrawProps.type';


/**
 * @description
 * The box textdraw entity
 */
export class BoxTextDraw extends TextDraw {

  constructor(props?: Partial<TBoxTextDrawProps>) {
    super(props);
    this.addComponent(new BoxComponent(props));
  }
}