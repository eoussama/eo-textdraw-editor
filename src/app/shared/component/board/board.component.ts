import { Component, Input, OnInit } from '@angular/core';
import { Dimension } from '../../models/dimension/dimension';
import { Position } from '../../models/position/position';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  //#region Properties

  dim = new Dimension({ height: 100, width: 230 });
  pos = new Position({ x: 150, y: 100 });

  @Input() dimension: Dimension;

  //#endregion

  //#region Lifecycle

  constructor() { }

  ngOnInit(): void { }

  //#endregion
}
