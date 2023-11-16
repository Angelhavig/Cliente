import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Blogs, Comentarios_Blogs } from '../interfaces/blogs';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/peticiones/blog/';
   }

   getBlogs(): Observable<Blogs[]>{
    return this.http.get<Blogs[]>(this.myAppUrl + this.myApiUrl);
   }

   getBlog(id: number, titulo_Blog: string): Observable<Blogs> {
    return this.http.get<Blogs>(this.myAppUrl + this.myApiUrl + id + '/' + titulo_Blog)
      .pipe(
        catchError(error => {
          console.error('Error en la solicitud HTTP:', error);
          return throwError(error);
        })
      );
  }

  getComentarios(id: number): Observable<Comentarios_Blogs[]>{
    return this.http.get<Comentarios_Blogs[]>(this.myAppUrl + this.myApiUrl + id);
   }
  

   postBlog(blog: Blogs): Observable<void>{
    return this.http.post<void>(this.myAppUrl + this.myApiUrl, blog);
   }

   deleteBlog(id: number): Observable<void>{
    return this.http.delete<void>(this.myAppUrl + this.myApiUrl + id);
   }


   getBlogE(id: number): Observable<Blogs> {
    return this.http.get<Blogs>(this.myAppUrl + 'api/peticiones/blogE/' + id)
      .pipe(
        catchError(error => {
          console.error('Error en la solicitud HTTP:', error);
          return throwError(error);
        })
      );
  }

  putBlog(id: number, blog: Blogs): Observable<void>{
    return this.http.put<void>(this.myAppUrl + this.myApiUrl + id, blog).pipe(
      catchError(error => {
        console.error('Error en la solicitud HTTP:', error);
        return throwError(error);
      })
    );
   }

}
