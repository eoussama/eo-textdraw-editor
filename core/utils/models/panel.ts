import { v4 as uuid4 } from 'uuid';
import { IconType } from 'react-icons';

import { PanelId } from '../types/union/panelId.type';
import { TNullable } from '../types/generic/nullable.type';
import { generateName } from '../helpers/string/name.helper';


/**
 * @description
 * UI Panel
 */
export class Panel {

  /**
   * @description
   * The ID of the panel
   */
  id: PanelId;

  /**
   * @description
   * The title of the panel
   */
  title: string;

  /**
   * @description
   * The icon of the panel
   */
  icon: TNullable<IconType>;

  /**
   * @description
   * If the panel is closed
   */
  closed: boolean;

  /**
   * @description
   * If the panel is collapsed
   */
  collapsed: boolean;

  /**
   * @description
   * If the panle can be closed
   */
  closable: boolean;

  /**
   * @description
   * If the panle can be collapsed
   */
  collapsible: boolean;

  /**
   * @description
   * If the panle can be dragged
   */
  draggable: boolean;

  /**
   * @description
   * The child panels that the current panel hosts
   */
  children: Array<PanelId>;

  /**
   * @description
   * The parent panel ID which host the current panel
   */
  parentId: TNullable<PanelId>;

  constructor(model?: Partial<Panel>) {
    this.id = model?.id ?? uuid4();
    this.icon = model?.icon ?? null;
    this.title = model?.title ?? generateName('panel');

    this.closed = model?.closed ?? false;
    this.closable = model?.closable ?? true;

    this.collapsed = model?.collapsed ?? false;
    this.collapsible = model?.collapsible ?? true;
    
    this.draggable = model?.draggable ?? true;

    this.children = model?.children ?? [];
    this.parentId = model?.parentId ?? null;
  }
}