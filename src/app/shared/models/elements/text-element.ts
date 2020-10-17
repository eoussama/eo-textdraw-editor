import { ElementType } from '../../enums/element-types.enum';
import { Element, IElement } from './element';

export interface ITextElement extends IElement {
  text: string;
  color: string;
  useBox: boolean;
}

export class TextElement extends Element implements ITextElement {

  //#region Properties

  readonly type: ElementType = ElementType.Text;

  text: string;
  color: string;
  useBox: boolean;

  //#endregion

  //#region Lifecycle

  constructor(boxElement?: Partial<ITextElement>) {
    super(boxElement as IElement);

    this.text = boxElement?.text ?? this.name ?? '';
    this.color = boxElement?.color ?? '#000000';
    this.useBox = boxElement?.useBox ?? false;
  }

  //#endregion
}
