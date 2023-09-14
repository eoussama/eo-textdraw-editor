import { useEffect } from 'react';
import { BoardSystem } from '../../core/system/board';
import { BoxTextDraw } from '../../core/entity/boxTextdraw';
import { TextdrawSystem } from '../../core/system/textdraw';
import EditorComponent from '../../components/editor/Editor';


export default function EditorPage() {
  useEffect(() => {
    const board1 = BoardSystem.create({ sizeWidth: 1080, sizeHeight: 720 });
    const board2 = BoardSystem.create({ sizeWidth: 1080, sizeHeight: 800 });

    BoardSystem.setActive(board1.id);
    
    TextdrawSystem.create(BoxTextDraw, board1, { sizeWidth: 200, sizeHeight: 50 });
    TextdrawSystem.create(BoxTextDraw, board1, { posX: 50, posY: 200, sizeWidth: 100, sizeHeight: 300 });
    TextdrawSystem.create(BoxTextDraw, board2, { posX: 400, posY: 500, sizeWidth: 200, sizeHeight: 50 });
  }, []);

  return (
    <EditorComponent />
  )
}