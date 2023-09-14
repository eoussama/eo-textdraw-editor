import { Entity } from '.';
import { NameComponent } from '../component/name';
import { SizeComponent } from '../component/size';
import { ScopeComponent } from '../component/scope';
import { PositionComponent } from '../component/position';
import { TTextDrawProps } from '../utils/types/props/textdrawProps.type';
import { AnchorComponent } from '../component/anchor';
import { HighlightComponent } from '../component/highlight';


/**
 * @description
 * The base textdraw entity
 */
export class TextDraw extends Entity {

  constructor(props?: Partial<TTextDrawProps>) {
    super(props);

    this.addComponent(new NameComponent(props));
    this.addComponent(new SizeComponent(props));
    this.addComponent(new ScopeComponent(props));
    this.addComponent(new AnchorComponent(props));
    this.addComponent(new PositionComponent(props));
    this.addComponent(new HighlightComponent(props));
  }
}