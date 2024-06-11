import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Personal } from 'src/app/interfaces/personal';
import { PersonalService } from 'src/app/services/personal.service';
import { MatTableDataSource} from '@angular/material/table';



@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css'],
})
export class PersonalComponent  implements OnInit{

  //Declaracion de variables
  fechaYHora: Date;
  filtroNombre: string = '';
  dataSource = new MatTableDataSource<Personal>();


  constructor(public _dialog: MatDialog, private _personalService: PersonalService, private router: Router){
    //Methodo que genera la fecha actual
    this.fechaYHora = new Date();
  }

  //Funcion que se ejecuta al iniciar
  ngOnInit(): void {
    this.getData();
  }

  //Funcion que hace posible el uso del filtro
  applyFilter(event: Event) {
      const filtroValue = (event.target as HTMLInputElement).value;
      this.filtroNombre = filtroValue.trim().toLowerCase();
  }

  //Funcion que ontiene y asigna los valores de la DB
  getData(){
    this._personalService.getPersonal().subscribe((data) => {
      this.dataSource.data = data;
    });
  }
  //Funcion de redireccionamiento
  generar(id_Personal?: number) {
    this.router.navigate(['Generar-Contrato', id_Personal]);
  }

  //Funcion de redireccionamiento
  edit(id?: number) {
    this.router.navigate(['EditarInformacion', id]);
  }

  //Funcion de redireccionamiento
  information(id?: number, Correo?: string) {
    this.router.navigate(['Informacion',id, Correo]);
  }

}
