import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ElementType } from '../../enums/element-types.enum';
import { ToolboxService } from '../../services/toolbox/toolbox.service';

@Component({
  selector: 'app-toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.scss']
})
export class ToolboxComponent implements OnInit, OnDestroy {

  //#region Properties

  /**
   * Whether or not the options are toggeled
   */
  showOptions = false;

  /**
   * ElementType enum
   */
  ElementType = ElementType;

  /**
   * The subscriptions
   */
  subscriptions: Subscription = new Subscription();

  //#endregion

  //#region Lifecycle

  constructor(
    private toolbox: ToolboxService
  ) { }

  ngOnInit(): void {
    this.subscriptions.add(
      this.toolbox.activeElement.subscribe(element => {

        // Toggle the options active state
        this.showOptions = element !== null;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  //#endregion

  //#region Events

  /**
   * Triggers when an element toggle is clicked
   *
   * @param type The type of the element
   */
  onElementClick(type: ElementType): void {
    this.showOptions = true;
    this.toolbox.elementClicked.next(type);
  }

  //#endregion
}
