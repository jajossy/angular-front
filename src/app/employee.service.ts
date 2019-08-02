import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Employee } from './employee';
import { Customer } from './customer';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  url = 'http://localhost:50029/api';


  constructor(private http: HttpClient) { }

  getAllEmployee(): Observable<Employee[]>{
    return this.http.get<Employee[]>(this.url + '/Employee');
  }

  getAllCustomer(): Observable<Customer[]>{
    return this.http.get<Customer[]>(this.url + '/Customer');
  }

  getCustomer(): Observable<Customer[]> {    
    return this.http.get<Customer[]>(this.url + '/Customer')
    .pipe(
      tap(_ => console.log('Done')),
      catchError(this.handleError<Customer[]>('getCustomer', []))
    );

  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead     

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
