import { PanelId } from '../union/panelId.type';



/**
 * @description
 * Properties for the panel component
 */
export type TPanelProps = {

  /**
   * @description
   * The ID of the panel
   */
  id: PanelId;

  /**
   * @description
   * DOM children, normal a component to be rendered inside of the panel
   */
  children?: JSX.Element;
}