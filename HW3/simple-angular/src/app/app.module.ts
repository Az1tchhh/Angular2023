import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchingPanelComponent } from './searching-panel/searching-panel.component';
import { DocumentComponent } from './document/document.component';
import { FormsModule } from "@angular/forms";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    SearchingPanelComponent,
    DocumentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      {path : '', component: DocumentComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
