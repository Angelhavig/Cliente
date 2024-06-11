import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Personal } from '../interfaces/personal';
import { Administracion, AdministracionData, Contrato, ContratoE, InformacionContratos, VContrato } from '../interfaces/contrato';

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

   getInfoContrato(id: number): Observable<Contrato>{
    return this.http.get<Contrato>(this.myAppUrl +'api/peticiones/Contrato/Info/' + id).pipe(
      catchError(error => {
        console.error('Error en la solicitud HTTP:', error);
        return throwError(error);
      })
    );
   }
   
   getInfoE(id: number): Observable<ContratoE>{
    return this.http.get<ContratoE>(this.myAppUrl +'api/peticiones/Contrato/informacion/' + id).pipe(
      catchError(error => {
        console.error('Error en la solicitud HTTP:', error);
        return throwError(error);
      })
    );
   }

   editContrato(id:number, contrato: ContratoE): Observable<void>{
    return this.http.put<void>(this.myAppUrl + this.myApiUrl + id, contrato).pipe(
      catchError(error => {
        console.error('Error en la solicitud HTTP:', error);
        return throwError(error);
      })
    );
   }


   getAdmin(puesto: string): Observable<Administracion>{
    return this.http.get<Administracion>(this.myAppUrl +'api/peticiones/Administracion/' + puesto).pipe(
      catchError(error => {
        console.error('Error en la solicitud HTTP:', error);
        return throwError(error);
      })
    );
   }

   actualizarPersonal(puesto: string, admin: Administracion): Observable<void>{
    return this.http.put<void>(this.myAppUrl +'api/peticiones/Administracion/' + puesto, admin).pipe(
      catchError(error => {
        console.error('Error en la solicitud HTTP:', error);
        return throwError(error);
      })
    );
   }


   getInfoAdmin(): Observable<AdministracionData[]>{
    return this.http.get<AdministracionData[]>(this.myAppUrl +'api/peticiones/Administracion/');
   }

   InformacionContratos(id: number): Observable<InformacionContratos>{
    return this.http.get<InformacionContratos>(this.myAppUrl +'api/peticiones/Informacion/' + id).pipe(
      catchError(error => {
        console.error('Error en la solicitud HTTP:', error);
        return throwError(error);
      })
    );
   }

   //Firmas e insert id

   postIdContrato(id: number): Observable<void>{
    return this.http.post<void>(this.myAppUrl +'api/peticiones/Firma/', {id}).pipe(
      catchError(error => {
        console.error('Error en la solicitud HTTP:', error);
        return throwError(error);
      })
    );
   }


   putFUsuario(id: number, F_Usuario: string | null): Observable<void>{
    return this.http.put<void>(this.myAppUrl +'api/peticiones/Firma/Usuario/' +id, {F_Usuario}).pipe(
      catchError(error => {
        console.error('Error en la solicitud HTTP:', error);
        return throwError(error);
      })
    );
   }

   putFTestigo1(id: number, F_Testigo1: string |null): Observable<void>{
    return this.http.put<void>(this.myAppUrl +'api/peticiones/Firma/Testigo1/'+id, {F_Testigo1}).pipe(
      catchError(error => {
        console.error('Error en la solicitud HTTP:', error);
        return throwError(error);
      })
    );
   }

   putFTestigo2(id: number, F_Testigo2: string | null): Observable<void>{
    return this.http.put<void>(this.myAppUrl +'api/peticiones/Firma/Testigo2/'+id, {F_Testigo2}).pipe(
      catchError(error => {
        console.error('Error en la solicitud HTTP:', error);
        return throwError(error);
      })
    );
   }

   putFAcademia(id: number, Academia: string | null): Observable<void>{
    return this.http.put<void>(this.myAppUrl +'api/peticiones/Firma/Academia/'+id, {Academia}).pipe(
      catchError(error => {
        console.error('Error en la solicitud HTTP:', error);
        return throwError(error);
      })
    );
   }


   


}
