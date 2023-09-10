import { v4 as uuid4 } from "uuid";
import { TextDraw } from "./textdraw";


/**
 * @description
 * The layers that live inside of boards and host textdraw elements
 */
export class Layer {

  /**
   * @description
   * The ID of the layer
   */
  id: string;

  /**
   * @description
   * If the layer is locked
   */
  locked: boolean;

  /**
   * @description
   * If the layer is hidden
   */
  hidden: boolean;

  /**
   * @description
   * The collection of textdraws
   */
  textdraws: Array<TextDraw>

  constructor(props?: Partial<{ id: string, locked: boolean, hidden: boolean, textdraws: Array<TextDraw> }>) {
    this.id = props?.id ?? uuid4();
    this.locked = props?.locked ?? false;
    this.hidden = props?.hidden ?? false;
    this.textdraws = props?.textdraws ?? [];
  }
}