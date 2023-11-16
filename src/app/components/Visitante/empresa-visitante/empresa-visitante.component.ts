import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Blogs } from 'src/app/interfaces/blogs';
import { Comentario_Empresa, Empresa, postComentario_Empresa } from 'src/app/interfaces/empresa';
import { BlogsService } from 'src/app/services/blogs.service';
import { ComentariosEmpresaService } from 'src/app/services/comentarios-empresa.service';
import { EmpresaService } from 'src/app/services/empresa.service';

@Component({
  selector: 'app-empresa-visitante',
  templateUrl: './empresa-visitante.component.html',
  styleUrls: ['./empresa-visitante.component.css']
})
export class EmpresaVisitanteComponent implements OnInit{
  comment: FormGroup;
  maxDate: Date;
  id: number | null = null; // Utilizamos number | null para manejar la posibilidad de que el id sea null
  titulo_Empresa: string | null = null;
  empresa: Empresa | null = null;
  comentario: Comentario_Empresa[] = [];

  idGlobal: number = 0;

  constructor(private route: Router,
    private _route: ActivatedRoute, 
    private _empresaService:EmpresaService,
    private _ComentariosEmpresaService: ComentariosEmpresaService,
    private fb: FormBuilder,
    private _snackBar: MatSnackBar ){

    this.maxDate = new Date();
    this.comment = this.fb.group({
      Titulo_Comentario: ['', Validators.required],
      Contenido_Comentario: ['', Validators.required],
      Contacto: ['', Validators.required],
      Contacto_Info: ['', Validators.required],
      Fecha: [new Date(), Validators.required],

    });
  }
  ngOnInit(): void {
    this.getBlogDetailsFromRoute();
  }
  
  private getBlogDetailsFromRoute(): void {
    const idFromRoute = this._route.snapshot.paramMap.get('id');
    const titulo_BlogFromRoute = this._route.snapshot.paramMap.get('titulo_Empresa');
  
    // Verifica si los valores son válidos antes de asignarlos
    if (idFromRoute && titulo_BlogFromRoute) {
      this.id = +idFromRoute; // Convierte a número
      this.titulo_Empresa = titulo_BlogFromRoute;
      this.idGlobal = +idFromRoute;

      this.getEmpresa(this.id, this.titulo_Empresa);

      this._ComentariosEmpresaService.getComentarios(this.id).subscribe((data) => (this.comentario = data));

    } else {
      console.error('ID o título del blog no válidos.');
    }
  }
  
  private getEmpresa(id: number | null, titulo_Blog: string | null): void {
    if (id !== null && this.titulo_Empresa !== null) {
      this._empresaService.getEmpresas(id, this.titulo_Empresa).subscribe(
        (data) => {
          this.empresa = data;
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
    const comentarios: postComentario_Empresa= {
      id_empresa: this.idGlobal,
      Titulo_Comentario: this.comment.value.Titulo_Comentario,
      Contenido_Comentario: this.comment.value.Contenido_Comentario,
      Contacto:  this.comment.value.Contacto,
      Contacto_Info:  this.comment.value.Contacto_Info,
      Fecha: this.comment.value.Fecha.toISOString().slice(0,10)
    };
  
    this._ComentariosEmpresaService.postComentario(comentarios).subscribe(data => {
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
