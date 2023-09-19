import styles from './Panel.module.scss';

import { useMemo } from 'react';

import { PanelSystem } from '../../core/system/panel';
import { usePanelStore } from '../../core/store/panel';

import { TPanelProps } from '../../core/utils/types/props/panelProps.type';


/**
 * @description
 * The panel component
 */
export default function PanelComponent(props: TPanelProps) {
  const { id, children } = props;
  const panel = useMemo(() => PanelSystem.get(id), [usePanelStore(e => e.panels)]);
  const subPanels = useMemo(() => panel?.children ?? [], [panel]);

  return (
    panel && <>
      <div className={styles['panel']}>
        <div className={styles['panel__head']}>
          <div className={styles['panel__left']}>
            {panel.icon && <span className={styles['panel__icon']}>
              {<panel.icon />}
            </span>}

            <h5 className={styles['panel__title']}>
              {panel.title}
            </h5>
          </div>

          <div className={styles['panel__right']}></div>
        </div>

        <div className={styles['panel__body']}>
          <div className={styles['panel__component']}>{children}</div>
          <div className={styles['panel__sub-panels']}>
            {subPanels.map(childId => <PanelComponent key={childId} id={childId} />)}
          </div>
        </div>
      </div>
    </>
  )
}