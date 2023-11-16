import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Comentario_Empresa, postComentario_Empresa } from '../interfaces/empresa';


@Injectable({
  providedIn: 'root'
})
export class ComentariosEmpresaService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/peticiones/empresa/';
   }

  getComentarios(id: number): Observable<Comentario_Empresa[]>{
    return this.http.get<Comentario_Empresa[]>(this.myAppUrl + this.myApiUrl + id).pipe(
      catchError(error => {
        console.error('Error en la solicitud HTTP:', error);
        return throwError(error);
      })
    );
   }

   postComentario(comment: postComentario_Empresa): Observable<void>{
    console.log('Posting comment:', comment);
    return this.http.post<void>(this.myAppUrl + this.myApiUrl, comment)
      .pipe(
        catchError(error => {
          console.error('Error in postComentario:', error);
          return throwError(error);
        })
      );
   }
   deleteComment(id: number): Observable<void>{
    return this.http.delete<void>(this.myAppUrl + this.myApiUrl + id);
   }
}
