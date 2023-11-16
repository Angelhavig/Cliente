import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Blogs } from 'src/app/interfaces/blogs';
import { BlogsService } from 'src/app/services/blogs.service';

@Component({
  selector: 'app-blogs-visitante',
  templateUrl: './blogs-visitante.component.html',
  styleUrls: ['./blogs-visitante.component.css']
})
export class BlogsVisitanteComponent implements OnInit {
  blogs: Blogs[] = [];

  constructor(private _blogService: BlogsService, private fb: FormBuilder, private _snackBar: MatSnackBar, private router: Router) {
  }
  ngOnInit() {
    this._blogService.getBlogs().subscribe((data) => (this.blogs = data));
  }

  detalles(id: number, titulo: string){
    this.router.navigate(['/Blog/', id, titulo]);
  }
  

}
