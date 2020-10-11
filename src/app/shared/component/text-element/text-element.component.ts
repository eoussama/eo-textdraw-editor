import { Component, Input, OnInit } from '@angular/core';
import { TextElement } from '../../models/elements/text-element';
import { ElementComponent } from '../element/element.component';

@Component({
  selector: 'app-text-element',
  templateUrl: './text-element.component.html',
  styleUrls: [
    './text-element.component.scss',
    './../element/element.component.scss'
  ]
})
export class TextElementComponent extends ElementComponent implements OnInit {

  //#region Properties

  /**
   * The box element object
   */
  @Input() element: TextElement;

  //#endregion

  //#region Lifecycle

  constructor() {
    super();
  }

  ngOnInit(): void { }

  //#endregion

  //#region Events

  //#endregion
}
