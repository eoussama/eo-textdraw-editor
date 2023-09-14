import { TNameProps } from './nameProps.type';
import { TSizeProps } from './sizeProps.type';
import { TScopeProps } from './scopeProps.type';
import { TEntityProps } from './entityProps.type';
import { TPositionProps } from './positionProps.type';


/**
 * @description
 * Textdraw properties
 */
export type TTextDrawProps = TEntityProps & TNameProps & TPositionProps & TSizeProps & TScopeProps;