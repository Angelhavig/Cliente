import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Comentarios_Blogs, postComentarios_Blogs } from '../interfaces/blogs';

@Injectable({
  providedIn: 'root'
})
export class ComentariosBlogService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/peticiones/blogComentario/';
   }


  getComentarios(id: number): Observable<Comentarios_Blogs[]>{
    return this.http.get<Comentarios_Blogs[]>(this.myAppUrl + this.myApiUrl + id).pipe(
      catchError(error => {
        console.error('Error en la solicitud HTTP de la base de datos:', error);
        return throwError(error);
      })
    );
   }

   postComentario(comment: postComentarios_Blogs): Observable<void>{
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
