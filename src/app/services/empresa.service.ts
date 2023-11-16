import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient} from '@angular/common/http';
import { Observable , catchError, throwError} from 'rxjs';
import { Empresa } from '../interfaces/empresa';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {
  private myAppUrl: string;
  private myApiUrl: string;


  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/peticiones/empresa/';
   }

   getEmpresa(): Observable<Empresa[]>{
    return this.http.get<Empresa[]>(this.myAppUrl + this.myApiUrl).pipe(
      catchError(error => {
        console.error('Error en la solicitud HTTP:', error);
        return throwError(error);
      })
    );
   }

   getEmpresas(id: number, titulo_Empresa: string): Observable<Empresa> {
    return this.http.get<Empresa>(this.myAppUrl + this.myApiUrl + id + '/' + titulo_Empresa)
      .pipe(
        catchError(error => {
          console.error('Error en la solicitud HTTP:', error);
          return throwError(error);
        })
      );
  }

  getEmpresaE(id: number): Observable<Empresa> {
    return this.http.get<Empresa>(this.myAppUrl + 'api/peticiones/empresaE/' + id)
      .pipe(
        catchError(error => {
          console.error('Error en la solicitud HTTP:', error);
          return throwError(error);
        })
      );
  }

  putEmpresa(id: number, empresa: Empresa): Observable<void>{
    return this.http.put<void>(this.myAppUrl + this.myApiUrl + id, empresa).pipe(
      catchError(error => {
        console.error('Error en la solicitud HTTP:', error);
        return throwError(error);
      })
    );
   }

  postEmpresa(empresa: Empresa): Observable<void>{
    return this.http.post<void>(this.myAppUrl + this.myApiUrl, empresa).pipe(
      catchError(error => {
        console.error('Error en la solicitud HTTP:', error);
        return throwError(error);
      })
    );
   }

}
