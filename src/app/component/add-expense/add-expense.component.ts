import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExpenseTracker } from 'src/app/models/expense-tracker';
import { ExpenseTrackerService } from 'src/app/service/expense-tracker.service';
import { FormsModule } from '@angular/forms';
 
@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css']
})
export class AddExpenseComponent implements OnInit {

  expense:ExpenseTracker = new ExpenseTracker
  constructor(private _expenseService: ExpenseTrackerService,
              private _router: Router) { }

  ngOnInit(): void {
  }

  saveExpenses(){
    this._expenseService.saveExpenses(this.expense).subscribe(
      data => {
        console.log('response', data);
        this._router.navigateByUrl("/expenses")
      }
    )
  }
}
