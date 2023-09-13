import { create } from 'zustand';
import { Board } from '../entity/board';
import { TNullable } from '../utils/types/generic/nullable.type';
import { TBoardAction, TBoardState } from '../utils/types/store/board.type';


export const useBoardStore = create<TBoardState & TBoardAction>((set, get) => ({
  boards: [],
  active: null,
  setActive(active: TNullable<Board>) {
    if (active) {
      set(() => ({ active: new Board({ ...active.toProps() }) }));
    } else {
      set(() => ({ active: null }));
    }
  },
  setBoards(boards: Array<Board>) {
    set(() => ({ boards }));
  }
}));