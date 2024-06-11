import { AfterViewInit, Component, OnInit } from '@angular/core';
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

  dataSource = new MatTableDataSource<VContrato>();
  fechaYHora: Date;
  filtroNombre: string = '';

  constructor(private _contratoService: ContratosService, private router: Router){

    this.fechaYHora = new Date();
    
  }

  ngOnInit(): void {
    this.getData()
  }

  getData(){
    this._contratoService.getContratos().subscribe((data)=>{
      this.dataSource.data = data;
    })
  }

  detalles(id?:number){
    this.router.navigate(['Contrato',id]);
  }
  edit(id?:number){
    this.router.navigate(['EditarContrato',id]);
  }

  view(id?: number) {
    this.router.navigate(['Vista'], { state: { id: id } });
}

applyFilter(event: Event) {
  const filtroValue = (event.target as HTMLInputElement).value;
  this.filtroNombre = filtroValue.trim().toLowerCase();
}


}
