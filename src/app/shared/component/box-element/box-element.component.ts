import { Component, OnInit } from '@angular/core';
import { Dimension } from '../../models/dimension/dimension';
import { Position } from '../../models/position/position';
import { ElementComponent } from '../element/element.component';

@Component({
  selector: 'app-box-element',
  templateUrl: './box-element.component.html',
  styleUrls: [
    './box-element.component.scss',
    './../element/element.component.scss'
  ]
})
export class BoxElementComponent extends ElementComponent implements OnInit {

  //#region Properties

  dim = new Dimension({ height: 100, width: 230 });
  pos = new Position({ x: 150, y: 100 });

  //#endregion

  //#region Lifecycle

  constructor() {
    super();
  }

  ngOnInit(): void {
    super.ngOnInit();
  }

  //#endregion
}
