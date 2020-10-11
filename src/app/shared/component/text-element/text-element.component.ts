import { Component, OnInit } from '@angular/core';
import { ElementComponent } from '../element/element.component';

@Component({
  selector: 'app-text-element',
  templateUrl: './text-element.component.html',
  styleUrls: ['./text-element.component.scss']
})
export class TextElementComponent extends ElementComponent implements OnInit {

  //#region Properties
  //#endregion

  //#region Lifecycle

  constructor() {
    super();
  }

  ngOnInit(): void { }

  //#endregion
}
