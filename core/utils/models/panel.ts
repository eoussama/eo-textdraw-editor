import { v4 as uuid4 } from 'uuid';
import { PanelId } from '../enums/panelId.enum';
import { TNullable } from '../types/generic/nullable.type';


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
   * If the panel is closed
   */
  isClosed: boolean;

  /**
   * @description
   * If the panel is collapsed
   */
  isCollapsed: boolean;

  /**
   * @description
   * The child panels that the current panel hosts
   */
  children: Array<PanelId>;

  /**
   * @description
   * The parent panel ID which host the current panel
   */
  parentId: TNullable<string>;

  constructor(model?: Partial<Panel>) {
    this.id = model?.id ?? (uuid4() as PanelId);

    this.isClosed = model?.isClosed ?? false;
    this.isCollapsed = model?.isCollapsed ?? false;

    this.children = model?.children ?? [];
    this.parentId = model?.parentId ?? null;
  }
}