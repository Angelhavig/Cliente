import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Blogs } from 'src/app/interfaces/blogs';
import { BlogsService } from 'src/app/services/blogs.service';

@Component({
  selector: 'app-registros',
  templateUrl: './registros.component.html',
  styleUrls: ['./registros.component.css']
})
export class RegistrosComponent implements OnInit {
  form: FormGroup;
  maxDate: Date;


  constructor( private fb: FormBuilder, private _blogsService: BlogsService, private _snackBar: MatSnackBar){
    this.maxDate = new Date();
    this.form = this.fb.group({
      Titulo_Blog: ['', Validators.required],
      Subtitulo_Blog: ['', Validators.required],
      Contenido_Blog: ['', Validators.required],
      fecha_creacion: [new Date(), Validators.required],
    });
  }


  ngOnInit(): void {
  }


  addBlog() {
    if (this.form.invalid) {
      return;
    }
    const blog: Blogs = {
      Titulo_Blog: this.form.value.id_usuario,
      Subtitulo_Blog: this.form.value.titulo,
      Contenido_Blog: this.form.value.descripcion,
      Fecha_Blog: this.form.value.fecha_creacion.toISOString().slice(0,10)
    };

    this._blogsService.postBlog(blog).subscribe(data => {
      this.mensajeExito('agregada');
      this.form.reset(); // Resetea el formulario para limpiar los campos
    });
  }

  mensajeExito(operacion: string) {
    this._snackBar.open(`La entrada fue ${operacion} con éxito`, '', {
      duration: 2000
    });
  }

}
