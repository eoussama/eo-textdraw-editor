import { Component } from '@angular/core';
import { Dimension } from './shared/models/dimension/dimension';
import { Position } from './shared/models/position/position';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'eo-textdraw-editor';

  dimension = new Dimension({ height: 60, width: 100 });
  position = new Position({ x: 150, y: 100 });
}
