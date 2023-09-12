import { Entity } from '.';
import { Layer } from '../../utils/models/layer';
import { SizeComponent } from '../component/size';


/**
 * @description
 * The board entity
 */
export class Board extends Entity {

  /**
   * @description
   * The collection of layers
   */
  layers: Array<Layer>

  constructor(props?: any) {
    super(props);

    this.layers = props?.layers ?? [];
    this.addComponent(new SizeComponent(props?.width, props?.height));
  }
}