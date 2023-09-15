import { useEffect } from 'react';
import { BoardSystem } from '../../core/system/board';
import { BoxTextDraw } from '../../core/entity/boxTextdraw';
import { TextdrawSystem } from '../../core/system/textdraw';
import EditorComponent from '../../components/editor/Editor';
import { TextTextDraw } from '../../core/entity/textTextdraw';
import { TextDrawFont } from '../../core/utils/enums/textdrawFont.enum';
import { TBoxTextDrawProps } from '../../core/utils/types/props/boxTextdrawProps.type';
import { TTextTextDrawProps } from '../../core/utils/types/props/textTextdrawProps.type';


export default function EditorPage() {
  useEffect(() => {
    const board1 = BoardSystem.create({ sizeWidth: 1080, sizeHeight: 720 });
    const board2 = BoardSystem.create({ sizeWidth: 1080, sizeHeight: 800 });

    BoardSystem.setActive(board1.id);
    
    TextdrawSystem.create(BoxTextDraw, board1, { sizeWidth: 200, sizeHeight: 50, posX: 600, posY: 290 });
    TextdrawSystem.create<TextTextDraw, TTextTextDrawProps>(TextTextDraw, board1, { sizeWidth: 200, sizeHeight: 50, posX: 50, posY: 50, textColor: '#FF00FFAA', font: TextDrawFont.Stylized });
    TextdrawSystem.create<BoxTextDraw, TBoxTextDrawProps>(BoxTextDraw, board1, { posX: 260, posY: 200, sizeWidth: 210, sizeHeight: 250, boxColor: '#FF0000AA' });
    TextdrawSystem.create<BoxTextDraw, TBoxTextDrawProps>(BoxTextDraw, board2, { posX: 400, posY: 500, sizeWidth: 200, sizeHeight: 50, boxColor: '#FFFF00AA' });
  }, []);

  return (
    <EditorComponent />
  )
}