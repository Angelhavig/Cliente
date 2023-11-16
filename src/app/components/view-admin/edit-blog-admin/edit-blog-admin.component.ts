import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Blogs } from 'src/app/interfaces/blogs';
import { BlogsService } from 'src/app/services/blogs.service';

@Component({
  selector: 'app-edit-blog-admin',
  templateUrl: './edit-blog-admin.component.html',
  styleUrls: ['./edit-blog-admin.component.css']
})
export class EditBlogAdminComponent  implements OnInit{
  form: FormGroup;
  id: number | undefined;

  constructor(
    private fb: FormBuilder, private _snackBar: MatSnackBar,
    public _dialogRef: MatDialogRef<EditBlogAdminComponent>,
    private _blogsService: BlogsService,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ){
    this.form = this.fb.group({
      Titulo_Blog: ['', Validators.required],
      Subtitulo_Blog: ['', Validators.required],
      Contenido_Blog: ['', Validators.required],
    });
    this.id = data.id;
    console.log(this.id)

  }
  ngOnInit(): void {
    this.edit(this.id);
  }

  edit(id: number | undefined){
    if(id !== undefined){
      this.getBlog(id);
    }

  }
  getBlog(id: number){
    this._blogsService.getBlogE(id).subscribe(data=>{
      this.form.setValue({
      Titulo_Blog:  data.Titulo_Blog,
      Subtitulo_Blog:  data.Subtitulo_Blog,
      Contenido_Blog: data.Contenido_Blog,
      })
    })

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
    };
    if(this.id == undefined){

    }else{
      this._blogsService.putBlog(this.id, blog).subscribe(data => {
        this.mensajeExito('agregada');
        this.form.reset(); // Resetea el formulario para limpiar los campos
        this._dialogRef.close();
      });
    }
  }

  mensajeExito(operacion: string) {
    this._snackBar.open(`La entrada fue ${operacion} con éxito`, '', {
      duration: 2000
    });
  }
}
