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

  private getUrl: string = "http://localhost:8080/api/v1/find-all-record";
  getExpenses(): Observable<ExpenseTracker[]>{
    return this._httpClient.get<ExpenseTracker[]>(this.getUrl).pipe(
      map(response => response)
    )
  }
}
