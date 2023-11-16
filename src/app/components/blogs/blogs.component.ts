import { Component, OnInit } from '@angular/core';
import { BlogsService } from 'src/app/services/blogs.service';
import { Blogs } from 'src/app/interfaces/blogs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css'],
})
export class BlogsComponent implements OnInit {
  blogs: Blogs[] = [];
  constructor(private _blogService: BlogsService, private fb: FormBuilder, private _snackBar: MatSnackBar) {
  }
  ngOnInit() {
    this._blogService.getBlogs().subscribe((data) => (this.blogs = data));
  }

  deleteBlog(id: number) {
      this._blogService.deleteBlog(id).subscribe(() => {
        this.mensajeExito();
        
      })

  }

  mensajeExito() {
    this._snackBar.open('La persona fue eliminada con exito', '', {
      duration: 2000
    });
  }

}
