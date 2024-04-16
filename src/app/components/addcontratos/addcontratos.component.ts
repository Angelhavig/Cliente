import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Contrato } from 'src/app/interfaces/contrato';
import { ContratosService } from 'src/app/services/contratos.service';

@Component({
  selector: 'app-addcontratos',
  templateUrl: './addcontratos.component.html',
  styleUrls: ['./addcontratos.component.css']
})
export class AddcontratosComponent {
  
  form: FormGroup;
  id: number;
  public administrativo: any;
  fechaYHora: Date;


  constructor(
    private fb: FormBuilder, private _snackBar: MatSnackBar,
    private _contratoService: ContratosService,
    private _route: ActivatedRoute,
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
    this.id = 0;
    this.fechaYHora = new Date();

  }

  ngOnInit(): void {    
    this.id = +this._route.snapshot.paramMap.get('id')!;
    this._contratoService.getInfoAdmin().subscribe((data)=>{
      this.administrativo = data;
      console.log(this.administrativo)
      this.form.patchValue({
        Directora: this.administrativo[0].Apellido + ' ' + this.administrativo[0].Nombre,
        Contraloria: this.administrativo[1].Apellido + ' ' + this.administrativo[1].Nombre,
        Tesorero: this.administrativo[2].Apellido + ' ' + this.administrativo[2].Nombre
      })
    })
  }

  cancelar(){}

  addContrato(){
    
    if(this.form.invalid || this.id === null){
      return;
    }
      const contrato: Contrato = {
        id_Personal: +this.id,
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
      this._contratoService.postContrato(contrato).subscribe(data =>{
        this.mensajeExito('Creado con exito');
      } );

    
  }


  mensajeExito(operacion: string) {
    this._snackBar.open(`${operacion}`, '', {
      duration: 2000
    });
  }


}
