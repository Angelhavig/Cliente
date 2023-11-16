import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Empresa } from 'src/app/interfaces/empresa';
import { EmpresaService } from 'src/app/services/empresa.service';

@Component({
  selector: 'app-empresas-visitante',
  templateUrl: './empresas-visitante.component.html',
  styleUrls: ['./empresas-visitante.component.css']
})
export class EmpresasVisitanteComponent implements OnInit{
  empresas: Empresa[] = [];

  constructor(private _empresaservice: EmpresaService, private fb: FormBuilder, private _snackBar: MatSnackBar, private router: Router){
    this._empresaservice.getEmpresa().subscribe((data) => (this.empresas = data));
  }
  ngOnInit(): void {
  }


  detalles(id: number, titulo: string){
    this.router.navigate(['/Empresa/', id, titulo]);
  }

}
