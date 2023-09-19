import { Panel } from '../models/panel';
import { PanelId } from '../enums/panelId.enum';


export const panelDefinitions: Array<Partial<Panel>> = [
  { id: PanelId.Left, title: '' },
  { id: PanelId.RightTop, title: '' },
  { id: PanelId.RightBottom, title: '' },
  { id: PanelId.Toolbox, title: 'Toolbox' },
  { id: PanelId.Options, title: 'Options' },
  { id: PanelId.Layers, title: 'Layers' }
];