import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Blogs } from 'src/app/interfaces/blogs';
import { BlogsService } from 'src/app/services/blogs.service';


@Component({
  selector: 'app-add-blog-admin',
  templateUrl: './add-blog-admin.component.html',
  styleUrls: ['./add-blog-admin.component.css']
})
export class AddBlogAdminComponent implements OnInit{
  form: FormGroup;
  maxDate: Date;

  constructor(
    private fb: FormBuilder, private _snackBar: MatSnackBar,
    public _dialogRef: MatDialogRef<AddBlogAdminComponent>,
    private _blogsService: BlogsService
  ){
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
  cancelar(){
    this._dialogRef.close();
  }

  addBlog() {
    if (this.form.invalid) {
      return;
    }
    const blog: Blogs = {
      Titulo_Blog: this.form.value.Titulo_Blog,
      Subtitulo_Blog: this.form.value.Subtitulo_Blog,
      Contenido_Blog: this.form.value.Contenido_Blog,
      Fecha_Blog: this.form.value.fecha_creacion.toISOString().slice(0,10)
    };
    console.log(blog);
    this._blogsService.postBlog(blog).subscribe(data => {
      this.mensajeExito('agregada');
      this.form.reset(); // Resetea el formulario para limpiar los campos
      this._dialogRef.close();
    });
  }

  mensajeExito(operacion: string) {
    this._snackBar.open(`La entrada fue ${operacion} con éxito`, '', {
      duration: 2000
    });
  }
}
