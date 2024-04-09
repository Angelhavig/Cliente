import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Personal } from '../interfaces/personal';
import { Contrato, VContrato } from '../interfaces/contrato';

@Injectable({
  providedIn: 'root'
})
export class ContratosService {

  private myAppUrl: string;
  private myApiUrl: string;


  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/peticiones/Contrato/';
   }

   getContratos(): Observable<VContrato[]>{
    return this.http.get<VContrato[]>(this.myAppUrl + this.myApiUrl);
   }

   postContrato(contrato: Contrato): Observable<void>{
    return this.http.post<void>(this.myAppUrl + this.myApiUrl, contrato).pipe(
      catchError(error => {
        console.error('Error en la solicitud HTTP:', error);
        return throwError(error);
      })
    );
   }
}
