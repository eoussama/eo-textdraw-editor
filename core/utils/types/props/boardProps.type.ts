import { TSizeProps } from './sizeProps.type';
import { TEntityProps } from './entityProps.type';
import { TextDraw } from '../../../entity/textdraw';


/**
 * @description
 * Board properties
 */
export type TBoardProps = TEntityProps & TSizeProps & {

  /**
   * @description
   * The list of textdraws
   */
  textdraws: Array<TextDraw>
}