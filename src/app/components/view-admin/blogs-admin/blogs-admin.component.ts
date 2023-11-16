import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { Blogs } from 'src/app/interfaces/blogs';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { AddBlogAdminComponent } from '../add-blog-admin/add-blog-admin.component';
import { BlogsService } from 'src/app/services/blogs.service';
import { Router } from '@angular/router';
import { EditBlogAdminComponent } from '../edit-blog-admin/edit-blog-admin.component';



@Component({
  selector: 'app-blogs-admin',
  templateUrl: './blogs-admin.component.html',
  styleUrls: ['./blogs-admin.component.css'],
  standalone: true,
  imports: [
    MatToolbarModule,
    MatTooltipModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatSortModule,
    MatPaginatorModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
  ],
})
export class BlogsAdminComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = [
    'id',
    'Titulo_Blog',
    'Subtitulo_Blog',
    'Contenido_Blog',
    'Fecha_Blog',
    'acciones',
  ];

  dataSource = new MatTableDataSource<Blogs>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public _dialog: MatDialog, private _blogsService: BlogsService,  private router: Router) {}

  ngOnInit(): void {
    this.getData();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.paginator._intl.itemsPerPageLabel = 'Items por pagina: ';
    this.dataSource.sort = this.sort;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getData() {
    this._blogsService.getBlogs().subscribe((data) => {
      console.log(data);
      this.dataSource.data = data;
      this.dataSource.paginator = this.paginator;
      this.paginator._intl.itemsPerPageLabel = 'Items por pagina: ';
      this.dataSource.sort = this.sort;
    });
  }

  add() {
    const dialogRef = this._dialog.open(AddBlogAdminComponent, {
      width: '500px',
      height: '500px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('Cerrado');
    });
  }

  detalles(id: number, titulo: string){
    this.router.navigate(['/blog-admin/', id, titulo]);
  }

  edit(id?: number){
    const dialogRef = this._dialog.open(EditBlogAdminComponent, {
      width: '500px',
      height: '500px',
      disableClose: true,
      data: {id: id}
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('Cerrado');
    });
  }

}


