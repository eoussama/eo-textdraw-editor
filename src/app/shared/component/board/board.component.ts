import { Component, OnInit } from '@angular/core';
import { Dimension } from '../../models/dimension/dimension';
import { Position } from '../../models/position/position';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  //#region Properties

  dimension = new Dimension({ height: 60, width: 100 });
  position = new Position({ x: 150, y: 100 });

  //#endregion

  //#region Lifecycle

  constructor() { }

  ngOnInit(): void { }

  //#endregion
}
