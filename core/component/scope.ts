import { Component } from '.';
import { TextDrawScope } from '../utils/enums/textdrawScope.enum';


/**
 * @description
 * The scope of the textdraw
 */
export class ScopeComponent extends Component {

  /**
   * @description
   * The scope of the entity
   */
  scope: TextDrawScope;

  constructor(scope?: TextDrawScope) {
    super();
    this.scope = scope ?? TextDrawScope.Global;
  }
}