import { MutableRefObject } from 'react'
import { TextDraw } from '../../../entity/textdraw'


/**
 * @description
 * Props for the textfdraw component
 */
export type TTextDrawComponentProps = {

  /**
   * @description
   * The textdraw to display
   */
  textdraw: TextDraw

  /**
   * @description
   * The host HTML element (board)
   */
  parentRef: MutableRefObject<HTMLDivElement>
}