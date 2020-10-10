import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Dimension } from '../../models/dimension/dimension';
import { Position } from '../../models/position/position';
import { getRatio } from '../../utils/_utils';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.scss']
})
export class ElementComponent implements OnInit, AfterViewInit {

  //#region Properties

  @Input() position: Position;
  @Input() dimension: Dimension;

  @ViewChild('element') element: ElementRef;

  //#endregion

  //#region Lifecycle

  constructor() { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.element?.nativeElement?.style.setProperty('transform', `translate3d(${this.position.x}px, ${this.position.y}px, 0px)`);
  }

  //#endregion

  //#region Events

  onDragging(e: any): void {
    const parentRect = e?.source?.element?.nativeElement?.parentElement?.parentElement?.getClientRects()?.item(0);
    const rect = e?.source?.element?.nativeElement?.getClientRects()?.item(0);

    this.position.x = rect.x - parentRect.x;
    this.position.y = rect.y - parentRect.y;
  }

  //#endregion

  //#region Methods

  getPositionLabel = () => `(x: ${this.position?.x}, y: ${this.position?.y})`;

  //#endregion
}
