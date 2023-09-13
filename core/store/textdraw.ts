import { create } from 'zustand';
import { TextDraw } from '../entity/textdraw';
import { TNullable } from '../utils/types/generic/nullable.type';
import { TTextDrawAction, TTextDrawState } from '../utils/types/store/textdraw.type';


export const useTextDrawStore = create<TTextDrawState & TTextDrawAction>((set) => ({
  active: null,
  setActive(active: TNullable<TextDraw>) {
    if (active) {
      set(() => ({ active: new TextDraw({ ...active.toProps() }) }));
    } else {
      set(() => ({ active: null }));
    }
  }
}));