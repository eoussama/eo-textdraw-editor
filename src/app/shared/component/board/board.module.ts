import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board.component';
import { BoxElementModule } from '../box-element/box-element.module';


@NgModule({
  declarations: [BoardComponent],
  imports: [
    CommonModule,
    BoxElementModule
  ],
  exports: [BoardComponent]
})
export class BoardModule { }
