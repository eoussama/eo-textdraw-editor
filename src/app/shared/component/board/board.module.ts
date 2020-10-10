import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board.component';
import { ElementModule } from '../element/element.module';



@NgModule({
  declarations: [BoardComponent],
  imports: [
    CommonModule,
    ElementModule
  ],
  exports: [BoardComponent]
})
export class BoardModule { }
