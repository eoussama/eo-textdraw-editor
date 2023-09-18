import { useMemo } from 'react';

import { PanelSystem } from '../../core/system/panel';
import { usePanelStore } from '../../core/store/panel';

import { TPanelProps } from '../../core/utils/types/props/panelProps.type';


/**
 * @description
 * The panel component
 */
export default function PanelComponent(props: TPanelProps) {
  const { id } = props;
  const panel = useMemo(() => PanelSystem.get(id), [usePanelStore(e => e.panels)]);
  const children = useMemo(() => panel?.children ?? [], [panel]);

  return (
    panel && <>
      {children.map(childId => <PanelComponent key={childId} id={childId} />)}
    </>
  )
}