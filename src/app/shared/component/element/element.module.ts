import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementComponent } from './element.component';



@NgModule({
  declarations: [ElementComponent],
  imports: [
    CommonModule
  ],
  exports: [ElementComponent]
})
export class ElementModule { }
