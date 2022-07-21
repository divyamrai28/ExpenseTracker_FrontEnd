import { Component, OnInit } from '@angular/core';
import { ExpenseTracker } from 'src/app/models/expense-tracker';
import { ExpenseTrackerService } from 'src/app/service/expense-tracker.service';

@Component({
  selector: 'app-expense-tracker',
  templateUrl: './expense-tracker.component.html',
  styleUrls: ['./expense-tracker.component.css']
})
export class ExpenseTrackerComponent implements OnInit {

  expenses: ExpenseTracker[] = [];

  constructor(private _expenseService: ExpenseTrackerService) { }

  ngOnInit(): void {
    this._expenseService.getExpenses().subscribe(
      data => this.expenses = data
    )
  }

}
