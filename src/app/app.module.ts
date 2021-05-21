import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//httpModule che consiglia il tutorial è un attimo vecchio, angular sforna una versione ogni 6 mesi
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
