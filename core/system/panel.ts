import { Panel } from '../utils/models/panel';
import { usePanelStore } from '../store/panel';

import { PanelId } from '../utils/types/union/panelId.type';
import { TNullable } from '../utils/types/generic/nullable.type';

import { PanelId as PanelIds } from '../utils/enums/panelId.enum';
import { panelDefinitions } from '../utils/const/panelsDefinitions.const';


/**
 * @description
 * Panel manager
 */
export class PanelSystem {

  /**
   * @description
   * Resets the panels
   */
  static init(): void {

    // Reseting the panels
    const setPanels = usePanelStore.getState().setPanels;
    setPanels([]);

    // Creating base panels
    panelDefinitions.forEach(panel => this.create(panel));

    this.add(PanelIds.Left, PanelIds.Toolbox);
    this.add(PanelIds.RightTop, PanelIds.Options);
    this.add(PanelIds.RightBottom, PanelIds.Layers);
  }

  /**
   * @description
   * Fetches a panel by ID
   *
   * @param panelId The target panel ID
   */
  static get(panelId: PanelId): TNullable<Panel> {
    const panels = usePanelStore.getState().panels;
    return panels.find(panel => panel.id === panelId) ?? null;
  }

  /**
   * @description
   * Creates a new panel
   *
   * @param model Initialization keys
   */
  static create(model?: Partial<Panel>): PanelId {
    const panel = new Panel(model);
    const panels = usePanelStore.getState().panels;
    const setPanels = usePanelStore.getState().setPanels;

    setPanels([...panels, panel]);
    return panel.id as PanelId;
  }

  /**
   * @description
   * Updates a panel object
   *
   * @param newPanel The new panel object
   */
  static update(newPanel: Panel): void {
    const panels = usePanelStore.getState().panels;
    const setPanels = usePanelStore.getState().setPanels;

    const newPanelIndex = panels.findIndex(panel => panel.id === newPanel.id);

    const start = panels.slice(0, newPanelIndex);
    const current = newPanel;
    const end = panels.slice(newPanelIndex + 1);

    const newPanels = [...start, current, ...end];

    setPanels(newPanels);
  }

  /**
   * @description
   * Adds a panel inside another panel
   *
   * @param parentId The ID of the panel to add to
   * @param childId The ID of the panel to add
   */
  static add(parentId: PanelId, childId: PanelId): void {
    const child = this.get(childId);
    const parent = this.get(parentId);

    if (parent && child) {
      const currentParent = this.get(child.parentId as PanelId) ?? null;

      child.parentId = parent.id;
      parent.children = Array.from(new Set([...parent.children, child.id]));

      this.update(child);
      this.update(parent);

      if (currentParent) {
        currentParent.children = currentParent.children.filter(e => e !== child.id);
        this.update(currentParent);
      }
    }
  }

  /**
   * @description
   * Collapses a panel
   *
   * @param panelId The ID of the panel to collapse
   */
  static toggleCollapse(panelId: string): void {
    const panel = this.get(panelId);

    if (panel) {
      panel.collapsed = !panel.collapsed;
      this.update(panel);
    }
  }

  /**
   * @description
   * Closes a panel
   *
   * @param panelId The ID of the panel to close
   */
  static close(panelId: string): void {
    const panel = this.get(panelId);

    if (panel) {
      panel.closed = true;
      this.update(panel);
    }
  }
}