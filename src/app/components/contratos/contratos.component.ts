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
export class ContratosComponent  implements OnInit, AfterViewInit{

  dataSource = new MatTableDataSource<VContrato>();

  constructor(private _contratoService: ContratosService, private router: Router){}


  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
    this.getData()
  }

  getData(){
    this._contratoService.getContratos().subscribe((data)=>{
      console.log(data);
      this.dataSource.data = data;
    })
  }

}
