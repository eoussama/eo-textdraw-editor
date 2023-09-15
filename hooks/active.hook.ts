import { useEffect, useMemo } from 'react';
import { TextDraw } from '../core/entity/textdraw';
import { TextdrawSystem } from '../core/system/textdraw';
import { useTextDrawStore } from '../core/store/textdraw';


/**
 * @description
 * Helps with marking active textdraws
 *
 * @param textdraw The target textdraw
 */
export function useActive(textdraw: TextDraw) {
  const active = useTextDrawStore(state => state.active);
  const isActive = useMemo(() => active?.id === textdraw.id, [active]);

  useEffect(() => {
    document.addEventListener('mousedown', e => {
      const target = e.target as HTMLDivElement;
      const currentComponent = target.closest('.textdraw') as unknown as HTMLDivElement;
      const componentId = currentComponent?.id;
      
      TextdrawSystem.setActive(componentId);
    });
  }, []);

  return { isActive };
}