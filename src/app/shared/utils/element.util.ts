import { ElementType } from '../enums/element-types.enum';
import { BoxElement } from '../models/elements/box-element';
import { TextElement } from '../models/elements/text-element';

/**
 * Gets an element class given a type
 * @param type The type of the element
 */
export function getElementClass(type: ElementType) {
  switch (type) {
    case ElementType.Box: return BoxElement;
    case ElementType.Text: return TextElement;
    default: return null;
  }
}
