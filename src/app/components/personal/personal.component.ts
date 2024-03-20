import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Personal } from 'src/app/interfaces/personal';
import { PersonalService } from 'src/app/services/personal.service';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';


@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css'],
})
export class PersonalComponent  implements OnInit, AfterViewInit{
  displayedColumns: string[] = [
    'id_Personal',
    'Nombre_Personal',
    'Apellido_Personal',
    'Telefono',
    'Correo',
    'Nacionalidad',
    'CURP',
    'RFC',
    'CP',
    'Calle',
    'Colonia',
    'NumeroIn',
    'NumeroEx',
    'Estado',
    'Municipio',
  ];

  dataSource = new MatTableDataSource<Personal>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public _dialog: MatDialog, private _personalService: PersonalService, private router: Router){

  }

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

  getData(){
    this._personalService.getPersonal().subscribe((data) => {
      console.log(data);
      this.dataSource.data = data;
      this.dataSource.paginator = this.paginator;
      this.paginator._intl.itemsPerPageLabel = 'Items por pagina: ';
      this.dataSource.sort = this.sort;
    });

  }
  add(){

  }
  detalles(id_Personal?: number, Nombre_Personal?: string) {
    // Implementa la lógica para mostrar los detalles del personal con el id_Personal proporcionado
    console.log('Detalles:', id_Personal, Nombre_Personal);
  }

  edit(id_Personal?: number) {
    // Implementa la lógica para editar el personal con el id_Personal proporcionado
    console.log('Editar:', id_Personal);
  }

  delete(id_Personal?: number, Nombre_Personal?: string) {
    // Implementa la lógica para eliminar el personal con el id_Personal proporcionado
    console.log('Eliminar:', id_Personal, Nombre_Personal);
  }

}
