import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { ExpenseTrackerComponent } from './component/expense-tracker/expense-tracker.component';

@NgModule({
  declarations: [
    AppComponent,
    ExpenseTrackerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
