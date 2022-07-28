import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ExpenseTracker } from '../models/expense-tracker';

@Injectable({
  providedIn: 'root'
})
export class ExpenseTrackerService {

  constructor(private _httpClient: HttpClient) { }

  private getUrlforGet: string = "http://localhost:8080/api/v1/find-all-record";
  getExpenses(): Observable<ExpenseTracker[]>{
    return this._httpClient.get<ExpenseTracker[]>(this.getUrlforGet).pipe(
      map(response => response)
    )
  }

  private getUrlforAdd: string = "http://localhost:8080/api/v1/add-expense";
  saveExpenses(expense: ExpenseTracker): Observable<ExpenseTracker>{
    return this._httpClient.post<ExpenseTracker>(this.getUrlforAdd, expense);
  }
}
