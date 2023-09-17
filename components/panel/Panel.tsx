import { TPanelProps } from '../../core/utils/types/props/panelProps.type';


/**
 * @description
 * The panel component
 */
export default function PanelComponent(props: TPanelProps) {
  const { id } = props;

  return <>
    panel {id}
  </>
}