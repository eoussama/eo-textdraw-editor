import styles from './Panel.module.scss';

import { useMemo } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

import { PanelSystem } from '../../core/system/panel';
import { usePanelStore } from '../../core/store/panel';

import { TPanelProps } from '../../core/utils/types/props/panelProps.type';
import { icons } from 'react-icons';


/**
 * @description
 * The panel component
 */
export default function PanelComponent(props: TPanelProps) {
  const { id, children } = props;
  const panel = useMemo(() => PanelSystem.get(id), [usePanelStore(e => e.panels)]);
  const subPanels = useMemo(() => panel?.children ?? [], [panel]);

  const isVisible = panel && !panel.closed;

  const onClose = () => {
    if (panel) {
      PanelSystem.close(panel.id);
    }
  };

  return (
    isVisible ? <>
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

          <div className={styles['panel__right']}>
            {panel.closable &&
              <span
                onClick={onClose}
                className={styles['panel__close']}
              >
                {<AiOutlineClose />}
              </span>
            }
          </div>
        </div>

        <div className={styles['panel__body']}>
          <div className={styles['panel__component']}>{children}</div>
          <div className={styles['panel__sub-panels']}>
            {subPanels.map(childId => <PanelComponent key={childId} id={childId} />)}
          </div>
        </div>
      </div>
    </> : null
  )
}