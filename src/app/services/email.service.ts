import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { EmailContratos } from '../interfaces/correo';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private myAppUrl: string;
  private myApiUrl: string;


  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/peticiones/Emails/';
   }

   getEmail(id: number): Observable<EmailContratos>{
    return this.http.get<EmailContratos>(this.myAppUrl + this.myApiUrl + id).pipe(
      catchError(error => {
        console.error('Error en la solicitud HTTP:', error);
        return throwError(error);
      })
    );
   }

   sendEmail(to: string, subject: string, body: string) {
    const payload = { to, subject, body };
    return this.http.post(this.myAppUrl + this.myApiUrl, payload).pipe(
      catchError(error => {
        console.error('Error al enviar el correo electrónico:', error);
        return throwError(error);
      })
    );
  }
}
