import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { VContrato } from 'src/app/interfaces/contrato';
import { ContratosService } from 'src/app/services/contratos.service';


@Component({
  selector: 'app-contratos',
  templateUrl: './contratos.component.html',
  styleUrls: ['./contratos.component.css']
})
export class ContratosComponent  implements OnInit{
  //Declaracion de variables
  dataSource = new MatTableDataSource<VContrato>();
  fechaYHora: Date;
  filtroNombre: string = '';

  constructor(private _contratoService: ContratosService, private router: Router){
    //Mehodo de generacion de fecha
    this.fechaYHora = new Date();
    
  }
  //Funcion que se ejecuta al inicio que llama a una funcion diferente
  ngOnInit(): void {
    this.getData()
  }
  //Funcion que obtiene los registros de la DB
  getData(){
    this._contratoService.getContratos().subscribe((data)=>{
      this.dataSource.data = data;
    })
  }
  //Funcion de redireccionamiento en base al id a una nueva pagina en base a la ruta
  detalles(id?:number){
    this.router.navigate(['Contrato',id]);
  }
  
  //Funcion de redireccionamiento en base al id a una nueva pagina en base a la ruta
  edit(id?:number){
    this.router.navigate(['EditarContrato',id]);
  }

  //Funcion de redireccionamiento en base al id a una nueva enviando el id como variable
  view(id?: number) {
    this.router.navigate(['Vista'], { state: { id: id } });
}


//Funcion que llame al filtro del archivo pipe filter
  applyFilter(event: Event) {
    const filtroValue = (event.target as HTMLInputElement).value;
    this.filtroNombre = filtroValue.trim().toLowerCase();
  }


}
