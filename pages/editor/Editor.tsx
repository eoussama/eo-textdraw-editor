import { useEffect } from 'react';
import { Board } from '../../core/entity/board';
import EditorComponent from '../../components/editor/Editor';
import { BoardSystem } from '../../core/system/board';
import { BoxTextDraw } from '../../core/entity/boxTextdraw';
import { TextdrawSystem } from '../../core/system/textdraw';


export default function EditorPage() {
  useEffect(() => {
    const board1 = BoardSystem.create({ width: 1080, height: 720 });
    const board2 = BoardSystem.create({ width: 1080, height: 800 });

    BoardSystem.setActive(board1.id);
    
    TextdrawSystem.create(BoxTextDraw, board1, { width: 200, height: 50 });
    TextdrawSystem.create(BoxTextDraw, board1, { x: 50, y: 200, width: 100, height: 300 });
    TextdrawSystem.create(BoxTextDraw, board2, { x: 400, y: 500, width: 200, height: 50 });
  }, []);

  return (
    <EditorComponent />
  )
}