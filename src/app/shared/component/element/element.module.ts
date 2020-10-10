import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ElementComponent } from './element.component';



@NgModule({
  declarations: [ElementComponent],
  imports: [
    CommonModule,
    DragDropModule
  ],
  exports: [ElementComponent]
})
export class ElementModule { }
