import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardModule } from './shared/component/board/board.module';
import { ToolboxModule } from './shared/component/toolbox/toolbox.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    BoardModule,
    ToolboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
