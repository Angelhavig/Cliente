import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Blogs, Comentarios_Blogs, postComentarios_Blogs } from 'src/app/interfaces/blogs';
import { BlogsService } from 'src/app/services/blogs.service';
import { ComentariosBlogService } from 'src/app/services/comentarios-blog.service';

@Component({
  selector: 'app-blog-visitante',
  templateUrl: './blog-visitante.component.html',
  styleUrls: ['./blog-visitante.component.css']
})
export class BlogVisitanteComponent implements OnInit{
  comment: FormGroup;
  maxDate: Date;
  id: number | null = null; // Utilizamos number | null para manejar la posibilidad de que el id sea null
  titulo_Blog: string | null = null;
  comentario: Comentarios_Blogs[] = []; // Ajusta el tipo de acuerdo a la estructura de tus datos
  blog: Blogs | null = null;

  idGlobal: number = 0;

  constructor(private route: Router,
    private _route: ActivatedRoute, 
    private _blogService: BlogsService, 
    private _comentarioBlogService: ComentariosBlogService,
    private fb: FormBuilder,
    private _snackBar: MatSnackBar){

    this.maxDate = new Date();
    this.comment = this.fb.group({
      Titulo_Comentario: ['', Validators.required],
      Contenido_Comentario: ['', Validators.required],
      Fecha: [new Date(), Validators.required],

    });
 }
ngOnInit(): void {
  this.getBlogDetailsFromRoute();
}

private getBlogDetailsFromRoute(): void {
  const idFromRoute = this._route.snapshot.paramMap.get('id');
  const titulo_BlogFromRoute = this._route.snapshot.paramMap.get('titulo_Blog');

  // Verifica si los valores son válidos antes de asignarlos
  if (idFromRoute && titulo_BlogFromRoute) {
    this.id = +idFromRoute; // Convierte a número
    this.titulo_Blog = titulo_BlogFromRoute;
    this.idGlobal = +idFromRoute;
    this.getBlog(this.id, this.titulo_Blog);

    this._comentarioBlogService.getComentarios(this.id).subscribe((data) => (this.comentario = data));
  } else {
    console.error('ID o título del blog no válidos.');
  }
}

private getBlog(id: number | null, titulo_Blog: string | null): void {
  if (id !== null && titulo_Blog !== null) {
    this._blogService.getBlog(id, titulo_Blog).subscribe(
      (data) => {
        this.blog = data;
      },
      (error) => {
        console.error('Error al obtener el blog:', error);
      }
    );
  } else {
    console.error('ID o título del blog no válidos.');
  }
}

addBlog() {
  
  if (this.comment.invalid) {
    return;
  }
  const comentarios: postComentarios_Blogs= {
    id_blog: this.idGlobal,
    Titulo_Comentario: this.comment.value.Titulo_Comentario,
    Contenido_Comentario: this.comment.value.Contenido_Comentario,
    Fecha: this.comment.value.Fecha.toISOString().slice(0,10)
  };

  this._comentarioBlogService.postComentario(comentarios).subscribe(data => {
    this.mensajeExito('agregada');
    this.comment.reset(); // Resetea el formulario para limpiar los campos
  });
}

mensajeExito(operacion: string) {
  this._snackBar.open(`La entrada fue ${operacion} con éxito`, '', {
    duration: 2000
  });
}

  
}
