import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { AddBlogAdminComponent } from '../add-blog-admin/add-blog-admin.component';
import { Router } from '@angular/router';
import { EmpresaService } from 'src/app/services/empresa.service';
import { Empresa } from 'src/app/interfaces/empresa';
import { AddEmpresaAdminComponent } from '../add-empresa-admin/add-empresa-admin.component';
import { EditEmpresaAdminComponent } from '../edit-empresa-admin/edit-empresa-admin.component';

@Component({
  selector: 'app-empresas-admin',
  templateUrl: './empresas-admin.component.html',
  styleUrls: ['./empresas-admin.component.css'],
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
export class EmpresasAdminComponent  implements OnInit, AfterViewInit{
  displayedColumns: string[] = [
    'id',
    'Titulo_Empresa',
    'Descripcion_Empresa',
    'Contacto_Empresa',
    'Correo_Empresa',
    'Pais_Empresa',
    'Sector_Empresa',
    'acciones',
  ];

  dataSource = new MatTableDataSource<Empresa>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public _dialog: MatDialog, private _empresaService: EmpresaService,  private router: Router) {}

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
    this._empresaService.getEmpresa().subscribe((data) => {
      console.log(data);
      this.dataSource.data = data;
      this.dataSource.paginator = this.paginator;
      this.paginator._intl.itemsPerPageLabel = 'Items por pagina: ';
      this.dataSource.sort = this.sort;
    });
  }

  add() {
    const dialogRef = this._dialog.open(AddEmpresaAdminComponent, {
      width: '500px',
      height: '500px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('Cerrado');
    });
  }

  detalles(id: number, titulo: string){
    this.router.navigate(['/companies-admin/', id, titulo]);
  }

  edit(id?: number){
    const dialogRef = this._dialog.open(EditEmpresaAdminComponent, {
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
