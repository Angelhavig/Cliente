import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router, RouterLink } from '@angular/router';
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

  fechaYHora: Date;

  
  filtroNombre: string = '';
  dataSource = new MatTableDataSource<Personal>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public _dialog: MatDialog, private _personalService: PersonalService, private router: Router){
    this.fechaYHora = new Date();

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
      const filtroValue = (event.target as HTMLInputElement).value;
      this.filtroNombre = filtroValue.trim().toLowerCase();
  }

  getData(){
    this._personalService.getPersonal().subscribe((data) => {
      this.dataSource.data = data;
      this.dataSource.paginator = this.paginator;
      this.paginator._intl.itemsPerPageLabel = 'Items por pagina: ';
      this.dataSource.sort = this.sort;
    });

  }
  add(){

  }
  generar(id_Personal?: number) {

    this.router.navigate(['Generar-Contrato', id_Personal]);
  }

  edit(id?: number) {
    // Implementa la lógica para editar el personal con el id_Personal proporcionado
    this.router.navigate(['EditarInformacion', id]);
  }

  delete(id_Personal?: number, Nombre_Personal?: string) {
    // Implementa la lógica para eliminar el personal con el id_Personal proporcionado
  }

  information(id?: number, Correo?: string) {
    this.router.navigate(['Informacion',id, Correo]);
  }

}
