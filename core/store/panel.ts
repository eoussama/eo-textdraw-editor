import { create } from 'zustand';
import { Panel } from '../utils/models/panel';
import { TPanelAction, TPanelState } from '../utils/types/store/panel.type';


export const usePanelStore = create<TPanelState & TPanelAction>((set, get) => ({
  panels: [],
  setPanels(panels: Array<Panel>) {
    set(() => ({ panels }));
  }
}));