import { Component } from '.';
import { TNameProps } from '../utils/types/props/nameProps.type';
import { generateName } from '../utils/helpers/string/name.helper';


/**
 * @description
 * The name of the entity on the screen
 */
export class NameComponent extends Component {

  /**
   * @description
   * The name of the entity
   */
  name: string;

  constructor(props?: Partial<TNameProps>) {
    super();
    this.name = props?.name ?? generateName('textdraw');
  }
}