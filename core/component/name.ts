import { Component } from '.';
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

  constructor(name?: string) {
    super();
    this.name = name ?? generateName('textdraw');
  }
}