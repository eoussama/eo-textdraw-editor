import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResizableModule } from 'angular-resizable-element';

import { BoxElementComponent } from './box-element.component';
import { ElementModule } from '../element/element.module';


@NgModule({
  declarations: [BoxElementComponent],
  imports: [
    CommonModule,
    ResizableModule,
    ElementModule
  ],
  exports: [BoxElementComponent]
})
export class BoxElementModule { }
