import { BoxTextDraw } from './boxTextdraw';
import { TextComponent } from '../component/text';
import { TTextTextDrawProps } from '../utils/types/props/textTextdrawProps.type';


/**
 * @description
 * The text textdraw entity
 */
export class TextTextDraw extends BoxTextDraw {

  constructor(props?: Partial<TTextTextDrawProps>) {
    if (props && !('useBox' in props)) {
      props.useBox = false;
    }

    super(props);
    this.addComponent(new TextComponent(props));
  }
}