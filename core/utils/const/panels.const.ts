import { FaCog, FaToolbox } from 'react-icons/fa';
import { BsFillLayersFill } from 'react-icons/bs';

import { Panel } from '../models/panel';
import { PanelId } from '../enums/panelId.enum';


export const panelDefinitions: Array<Partial<Panel>> = [

  // Static panels
  { id: PanelId.Left, title: '' },
  { id: PanelId.RightTop, title: '' },
  { id: PanelId.RightBottom, title: '' },

  // Base panels
  { id: PanelId.Options, title: 'Options', icon: FaCog },
  { id: PanelId.Toolbox, title: 'Toolbox', icon: FaToolbox },
  { id: PanelId.Layers, title: 'Layers', icon: BsFillLayersFill }
];