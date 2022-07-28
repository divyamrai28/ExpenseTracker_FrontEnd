import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ExpenseTrackerComponent } from './component/expense-tracker/expense-tracker.component';
import { AddExpenseComponent } from './component/add-expense/add-expense.component';

const routers:Routes = [
  {path: 'expenses', component: ExpenseTrackerComponent},
  {path: 'add-expense', component: AddExpenseComponent},
  {path:'', redirectTo:'/expenses', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    ExpenseTrackerComponent,
    AddExpenseComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routers),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
