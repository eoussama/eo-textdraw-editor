import { ResizeDirection } from '../enums/resizeDirection.enum';


/**
 * @description
 * Categorized resize directions
 */
export const resizeDirections = {

  /**
   * @description
   * The directions sensitive to position changes
   */
  sensitive: [
    ResizeDirection.Top,
    ResizeDirection.Left,
    ResizeDirection.TopRight,
    ResizeDirection.TopLeft,
    ResizeDirection.BottomLeft
  ],


  /**
   * @description
   * All recognized directions
   */
  all: [
    ResizeDirection.Top,
    ResizeDirection.Right,
    ResizeDirection.Bottom,
    ResizeDirection.Left,
    ResizeDirection.TopRight,
    ResizeDirection.BottomRight,
    ResizeDirection.BottomLeft,
    ResizeDirection.TopLeft
  ]
}