import { Component, Input, OnInit } from '@angular/core';
import { Dimension } from '../../models/dimension/dimension';
import { Position } from '../../models/position/position';
import { getRatio } from '../../utils/_utils';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.scss']
})
export class ElementComponent implements OnInit {

  //#region Properties

  @Input() position: Position;
  @Input() dimension: Dimension;

  //#endregion

  //#region Lifecycle

  constructor() { }

  ngOnInit(): void { }

  //#endregion
}
