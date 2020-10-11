import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextElementComponent } from './text-element.component';
import { ElementModule } from '../element/element.module';



@NgModule({
  declarations: [TextElementComponent],
  imports: [
    CommonModule,
    ElementModule
  ],
  exports: [TextElementComponent]
})
export class TextElementModule { }
