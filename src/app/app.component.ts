import { Component } from '@angular/core';
import { Dimension } from './shared/models/dimension/dimension';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'eo-textdraw-editor';
  dimension: Dimension = new Dimension({ height: 720, width: 1280 });
}
