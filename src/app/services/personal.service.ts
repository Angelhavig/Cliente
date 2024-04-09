import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Personal, PersonalData, PersonalE } from '../interfaces/personal';
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

   getInfoPerfil(id: number): Observable<Personal>{
    return this.http.get<Personal>(this.myAppUrl +'api/peticiones/Personal/info/' + id).pipe(
      catchError(error => {
        console.error('Error en la solicitud HTTP:', error);
        return throwError(error);
      })
    );
   }

   getInfoE(id: number): Observable<PersonalE>{
    return this.http.get<PersonalE>(this.myAppUrl +'api/peticiones/Personal/informacion/' + id).pipe(
      catchError(error => {
        console.error('Error en la solicitud HTTP:', error);
        return throwError(error);
      })
    );
   }

   editPersonal(id:number, personal: PersonalData): Observable<void>{
    return this.http.put<void>(this.myAppUrl + this.myApiUrl + id, personal).pipe(
      catchError(error => {
        console.error('Error en la solicitud HTTP:', error);
        return throwError(error);
      })
    );
   }

}
