import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolboxComponent } from './toolbox.component';



@NgModule({
  declarations: [ToolboxComponent],
  imports: [
    CommonModule
  ],
  exports: [ToolboxComponent]
})
export class ToolboxModule { }
