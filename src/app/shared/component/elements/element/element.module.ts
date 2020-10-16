import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ElementComponent } from './element.component';



@NgModule({
  declarations: [ElementComponent],
  imports: [
    CommonModule
  ],
  providers: [DecimalPipe],
  exports: [DragDropModule, ElementComponent]
})
export class ElementModule { }
