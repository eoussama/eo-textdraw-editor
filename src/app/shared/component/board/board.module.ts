import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { BoardComponent } from './board.component';
import { ElementModule } from '../element/element.module';


@NgModule({
  declarations: [BoardComponent],
  imports: [
    CommonModule,
    DragDropModule,
    ElementModule
  ],
  exports: [BoardComponent]
})
export class BoardModule { }
