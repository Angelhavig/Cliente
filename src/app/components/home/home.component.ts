import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Blogs } from 'src/app/interfaces/blogs';
import { BlogsService } from 'src/app/services/blogs.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  blogs: Blogs[] = [];
  blogsSets: Blogs[][] = [];
  blogsPerSet = 3;
  currentSetIndex = 0;

  
  constructor(private _blogService: BlogsService, private fb: FormBuilder, private _snackBar: MatSnackBar){

  }
  ngOnInit(): void {
    this._blogService.getBlogs().subscribe((data) => {this.blogs = data;
      this.splitBlogs();
    });
  } 

  
  splitBlogs() {
    for (let i = 0; i < this.blogs.length; i += this.blogsPerSet) {
      this.blogsSets.push(this.blogs.slice(i, i + this.blogsPerSet));
    }
  }

  prevSet() {
    if (this.currentSetIndex > 0) {
      this.currentSetIndex--;
    }
  }

  nextSet() {
    if (this.currentSetIndex < this.blogsSets.length - 1) {
      this.currentSetIndex++;
    }
  }

}
