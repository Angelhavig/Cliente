import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Personal, PersonalData } from '../interfaces/personal';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonalService {

  private myAppUrl: string;
  private myApiUrl: string;


  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/peticiones/Personal/';
   }

   getPersonal(): Observable<Personal[]>{
    return this.http.get<Personal[]>(this.myAppUrl + this.myApiUrl);
   }

   postPersonal(personal: PersonalData): Observable<void>{
    return this.http.post<void>(this.myAppUrl + this.myApiUrl, personal).pipe(
      catchError(error => {
        console.error('Error en la solicitud HTTP:', error);
        return throwError(error);
      })
    );
   }
}
