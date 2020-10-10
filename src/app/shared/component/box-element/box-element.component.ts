import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { fadeAnimation } from '../../animations/fade.animation';
import { Dimension } from '../../models/dimension/dimension';
import { BoxElement } from '../../models/elements/box-element';
import { Position } from '../../models/position/position';
import { ElementComponent } from '../element/element.component';

@Component({
  selector: 'app-box-element',
  templateUrl: './box-element.component.html',
  styleUrls: [
    './box-element.component.scss',
    './../element/element.component.scss'
  ],
  animations: [fadeAnimation]
})
export class BoxElementComponent extends ElementComponent implements OnInit {

  //#region Properties

  @Input() element: BoxElement;

  //#endregion

  //#region Lifecycle

  constructor() {
    super();
  }

  ngOnInit(): void {
    super.ngOnInit();
  }

  //#endregion

  //#region Methods

  getColor = () => this.element?.color;

  //#endregion
}
