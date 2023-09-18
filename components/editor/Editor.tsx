import styles from './Editor.module.scss';

import { useEffect } from 'react';

import BoardComponent from '../board/Board';
import PanelComponent from '../panel/Panel';

import { PanelSystem } from '../../core/system/panel';
import { useBoardStore } from '../../core/store/board';

import { PanelId } from '../../core/utils/enums/panelId.enum';


export default function EditorComponent() {
  const board = useBoardStore((state) => state.active);

  useEffect(() => {
    PanelSystem.init();
  }, []);

  return (
    <div className={styles['root']}>
      <div className={styles['head']}></div>

      <div className={styles['main']}>
        <div className={styles['left']}>
          <PanelComponent id={PanelId.Left} />
        </div>

        <div className={styles['center']}>
          <div className={styles['meta']}></div>
          <div className={styles['content']}>
            {board && <BoardComponent board={board} />}
          </div>
        </div>

        <div className={styles['right']}>
          <div className={styles['top']}>
            <PanelComponent id={PanelId.RightTop} />
          </div>
          <div className={styles['bottom']}>
            <PanelComponent id={PanelId.RightBottom} />
          </div>
        </div>
      </div>
    </div>
  )
}