import { v4 as uuid4 } from "uuid";


/**
 * @description
 * The base TextDraw element
 */
export class TextDraw {

  /**
   * @description
   * The ID of the element
   */
  id: string;

  /**
   * @description
   * The name of the element
   */
  name: string;

  /**
   * @description
   * The position of the element on the X axis
   */
  x: number;

  /**
   * @description
   * The position of the element on the Z axis
   */
  y: number;

  /**
   * @description
   * The width of the element
   */
  width: number;

  /**
   * @description
   * The height of the element
   */
  height: number;

  constructor(props?: Partial<{ id: string, name: string, x: number, y: number, width: number, height: number }>) {
    this.name = props?.name ?? `elem_${Math.floor(Math.random() * 10000)}`;
    this.id = props?.id ?? uuid4();
    this.x = props?.x ?? 0;
    this.y = props?.y ?? 0;
    this.width = props?.width ?? 0;
    this.height = props?.height ?? 0;
  }
}