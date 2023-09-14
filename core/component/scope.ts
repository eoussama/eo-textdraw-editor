import { Component } from '.';
import { TextDrawScope } from '../utils/enums/textdrawScope.enum';
import { TScopeProps } from '../utils/types/props/scopeProps.type';


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

  constructor(props?: Partial<TScopeProps>) {
    super();
    this.scope = props?.scope ?? TextDrawScope.Global;
  }
}