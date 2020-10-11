import { ElementType } from '../../enums/element-types.enum';
import { Element, IElement } from './element';

export interface ITextElement extends IElement {
  text: string;
}

export class TextElement extends Element implements ITextElement {

  //#region Properties

  readonly type: ElementType = ElementType.Text;

  text: string;

  //#endregion

  //#region Lifecycle

  constructor(boxElement?: Partial<ITextElement>) {
    super(boxElement as IElement);
    this.text = boxElement?.text ?? '';
  }

  //#endregion
}
