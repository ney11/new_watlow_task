import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map, Observable, throwError } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class HomeService {
    _URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php';

    constructor(private http: HttpClient) { }

    getDrink(searchTerm: string) {
        // return this.http.get(`${this._URL}?s=${searchTerm}`);
        return this.http.get<any>(`${this._URL}?s=${searchTerm}`).pipe(
            catchError(this.handleError)
        );
    }

    /** Centralized error handler */
    private handleError(error: HttpErrorResponse): Observable<never> {
        const errorMessage = error.error?.message || `HTTP ${error.status}: ${error.statusText}`;
        console.error('API Error:', errorMessage);
        return throwError(() => new Error('Failed to fetch drinks. Please try again later.'));
    }

}