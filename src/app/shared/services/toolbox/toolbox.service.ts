import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ElementType } from '../../enums/element-types.enum';
import { Element } from '../../models/elements/element';

@Injectable({
  providedIn: 'root'
})
export class ToolboxService {

  //#region Properties

  /**
   * Clicked element subject
   */
  elementClicked: BehaviorSubject<ElementType> = new BehaviorSubject<ElementType>(ElementType.None);

  /**
   * Active element subject
   */
  activeElement: BehaviorSubject<Element> = new BehaviorSubject<Element>(null);

  //#endregion

  //#region Lifecycle

  constructor() { }

  //#endregion
}
