import { Entity } from '.';
import { NameComponent } from '../component/name';
import { SizeComponent } from '../component/size';
import { PositionComponent } from '../component/position';


/**
 * @description
 * The base textdraw entity
 */
export class TextDraw extends Entity {

  constructor(props: any) {
    super(props);

    this.addComponent(new NameComponent(props.name));
    this.addComponent(new PositionComponent(props.x, props.y));
    this.addComponent(new SizeComponent(props.width, props.height));
  }
}