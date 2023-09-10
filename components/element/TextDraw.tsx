import { useState } from 'react';
import styles from './TextDraw.module.css'

import { TextDraw } from '../../utils/models/textdraw';


export default function TextDrawComponent(props: { textdraw: TextDraw }) {
  const [textdraw] = useState(props.textdraw);
  return (
    <div
      className={styles.textdraw}
      style={{ width: textdraw.width, height: textdraw.height }}
    >
      Textdraw 1
    </div>
  )
}