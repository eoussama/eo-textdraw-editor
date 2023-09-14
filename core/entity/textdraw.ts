import { Entity } from '.';
import { NameComponent } from '../component/name';
import { SizeComponent } from '../component/size';
import { ScopeComponent } from '../component/scope';
import { PositionComponent } from '../component/position';
import { TTextDrawProps } from '../utils/types/props/textdrawProps.type';


/**
 * @description
 * The base textdraw entity
 */
export class TextDraw extends Entity {

  constructor(props?: Partial<TTextDrawProps>) {
    super(props?.id);

    this.addComponent(new NameComponent(props?.name));
    this.addComponent(new ScopeComponent(props?.scope));
    this.addComponent(new PositionComponent(props?.x, props?.y));
    this.addComponent(new SizeComponent(props?.width, props?.height));
  }
}