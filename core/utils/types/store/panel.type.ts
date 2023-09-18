import { Panel } from '../../models/panel';


/**
 * @description
 * The panel state
 */
export type TPanelState = {

  /**
   * @description
   * The list of loaded panels
   */
  panels: Array<Panel>
}

/**
 * @description
 * The panel actions
 */
export type TPanelAction = {

  /**
   * @description
   * Sets the list of panels
   *
   * @param panels The panels to set
   */
  setPanels: (panels: Array<Panel>) => void
}