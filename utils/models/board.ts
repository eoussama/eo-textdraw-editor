import { v4 as uuid4 } from "uuid";
import { Layer } from "./layer";


/**
 * @description
 * The parent board that hosts all sub elements.
 */
export class Board {

  /**
   * @description
   * The ID of the board
   */
  id: string;

  /**
   * @description
   * The width of the board
   */
  width: number;

  /**
   * @description
   * The height of the board
   */
  height: number;

  /**
   * @description
   * The collection of layers
   */
  layers: Array<Layer>

  constructor(props?: Partial<{ id: string, width: number, height: number, layers: Array<Layer> }>) {
    this.id = props?.id ?? uuid4()
    this.width = props?.width ?? 1080;
    this.height = props?.height ?? 720;
    this.layers = props?.layers ?? [];
  }
}