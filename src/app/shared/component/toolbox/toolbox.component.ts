import { Component, OnInit } from '@angular/core';
import { ElementType } from '../../enums/element-types.enum';

@Component({
  selector: 'app-toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.scss']
})
export class ToolboxComponent implements OnInit {

  //#region Properties

  ElementType = ElementType;

  //#endregion

  //#region Lifecycle

  constructor() { }

  ngOnInit(): void { }

  //#endregion

  //#region Events

  onElementClick(type: ElementType): void { }

  //#endregion
}
