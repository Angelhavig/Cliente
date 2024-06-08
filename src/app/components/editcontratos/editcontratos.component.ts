import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Contrato, ContratoE } from 'src/app/interfaces/contrato';
import { ContratosService } from 'src/app/services/contratos.service';

@Component({
  selector: 'app-editcontratos',
  templateUrl: './editcontratos.component.html',
  styleUrls: ['./editcontratos.component.css']
})
export class EditcontratosComponent implements OnInit {

  form: FormGroup;
  id: string;
  public contrato: any;
  fechaYHora: Date;



  constructor(
    private fb: FormBuilder, private _snackBar: MatSnackBar,
    private _contratoService: ContratosService,
    private _route: ActivatedRoute
  ){
    this.form = this.fb.group({
      Funciones: ['', [Validators.required, Validators.maxLength(100),  Validators.pattern(/^[a-zA-Z\s]*$/)]],
      Adscrito: ['', [Validators.required, Validators.maxLength(100),  Validators.pattern(/^[a-zA-Z\s]*$/)]],
      Inicio: ['', [Validators.required, Validators.maxLength(100)]],
      Termino: ['', [Validators.required, Validators.maxLength(100)]],
      Sueldo: ['', [Validators.required, Validators.maxLength(100), Validators.pattern(/^\d+$/)]],
      Sueldo_Escrito: ['', [Validators.required, Validators.maxLength(100),  Validators.pattern(/^[a-zA-Z\s]*$/)]],

      Nombre_T1: ['', [Validators.required, Validators.maxLength(100),Validators.pattern(/^[a-zA-Z\s]*$/)]],
      Apellido_T1: ['', [Validators.required, Validators.maxLength(100),Validators.pattern(/^[a-zA-Z\s]*$/)]],
      Correo_T1: ['', [Validators.required, Validators.email, Validators.maxLength(100)]],
      Telefono_T1: ['', [Validators.required, Validators.maxLength(100),Validators.pattern(/^\d+$/)]],

      Nombre_T2: ['', [Validators.required, Validators.maxLength(100),Validators.pattern(/^[a-zA-Z\s]*$/)]],
      Apellido_T2: ['', [Validators.required, Validators.maxLength(100),Validators.pattern(/^[a-zA-Z\s]*$/)]],
      Correo_T2: ['', [Validators.required, Validators.email, Validators.maxLength(100)]],
      Telefono_T2: ['', [Validators.required, Validators.maxLength(100),Validators.pattern(/^\d+$/)]],
      
      Directora: ['', [Validators.required, Validators.maxLength(100),Validators.pattern(/^[a-zA-Z\s]*$/)]],
      Contraloria: ['', [Validators.required, Validators.maxLength(100),Validators.pattern(/^[a-zA-Z\s]*$/)]],
      Tesorero: ['', [Validators.required, Validators.maxLength(100),Validators.pattern(/^[a-zA-Z\s]*$/)]],
      Fecha_Creacion: ['', [Validators.required, Validators.maxLength(100)]],
      
    });
    this.id = '';
    this.fechaYHora = new Date();

  }

  ngOnInit(): void {
    const idFromRoute = this._route.snapshot.paramMap.get('id');
    if (idFromRoute !== null) {
      this.id = idFromRoute;
      const id_Personal = +this.id;
      this.getInfo(id_Personal);
    } else {
      // Handle the case where 'id' parameter is null
      // For example, you might want to handle it differently or show an error message
      console.error("'id' parameter is null.");
    }
  }
  getInfo(id: number) {
    if (id !== null) {
      this._contratoService.getInfoE(id).subscribe((data) => {
        this.contrato = data;
        this.form.setValue({
          Funciones: this.contrato[0].Funciones,
          Adscrito: this.contrato[0].Adscrito,
          Inicio: this.contrato[0].Inicio,
          Termino: this.contrato[0].Termino,
          Sueldo:this.contrato[0].Sueldo,
          Sueldo_Escrito: this.contrato[0].Sueldo_Escrito,
    
          Nombre_T1:this.contrato[0].Nombre_T1,
          Apellido_T1: this.contrato[0].Apellido_T1,
          Correo_T1:this.contrato[0].Correo_T1,
          Telefono_T1:this.contrato[0].Telefono_T1,
    
          Nombre_T2: this.contrato[0].Nombre_T2,
          Apellido_T2: this.contrato[0].Apellido_T2,
          Correo_T2: this.contrato[0].Correo_T2,
          Telefono_T2:this.contrato[0].Telefono_T2,
          
          Directora: this.contrato[0].Directora,
          Contraloria: this.contrato[0].Contraloria,
          Tesorero:this.contrato[0].Tesorero,
          Fecha_Creacion: this.contrato[0].Fecha_Creacion,

        });
      }, error => {
        console.error('Error al obtener la información del perfil:', error);
      });
    } else {
      console.error('Error al obtener el correo.');
    }
  }

  getData(id: number){

  }
  

  cancelar(){}

  addContrato(){
    var id_Personal = Number(this.id);
    if(this.form.invalid){
      return;
    }
    const contrato: ContratoE = {
      Funciones:this.form.value.Funciones ,
      Adscrito: this.form.value.Adscrito,
      Inicio: this.form.value.Inicio,
      Termino: this.form.value.Termino,
      Sueldo: this.form.value.Sueldo,
      Sueldo_Escrito: this.form.value.Sueldo_Escrito,
      Nombre_T1: this.form.value.Nombre_T1,
      Apellido_T1: this.form.value.Apellido_T1 ,
      Telefono_T1: this.form.value.Telefono_T1,
      Correo_T1: this.form.value.Correo_T1 ,
      Nombre_T2: this.form.value.Nombre_T2,
      Apellido_T2: this.form.value.Apellido_T2 ,
      Telefono_T2: this.form.value.Telefono_T2,
      Correo_T2: this.form.value.Correo_T2 ,
      Directora: this.form.value.Directora,
      Contraloria: this.form.value.Contraloria ,
      Tesorero: this.form.value.Tesorero,
      Fecha_Creacion: this.form.value.Fecha_Creacion ,
      
    };
      this._contratoService.editContrato(id_Personal, contrato).subscribe(data =>{
        this.mensajeExito('Actualizado con exito');
      } );
    
  }


  mensajeExito(operacion: string) {
    this._snackBar.open(`${operacion}`, '', {
      duration: 2000
    });
  }


}
