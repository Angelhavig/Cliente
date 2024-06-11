import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PersonalData } from 'src/app/interfaces/personal';
import { PersonalService } from 'src/app/services/personal.service';

@Component({
  selector: 'app-addpersonal',
  templateUrl: './addpersonal.component.html',
  styleUrls: ['./addpersonal.component.css']
})
export class AddpersonalComponent implements OnInit{
  //Declaracion de variables
  form: FormGroup;
  fechaYHora: Date;


  constructor(
    private fb: FormBuilder, private _snackBar: MatSnackBar,
    private _personalService: PersonalService
  ){
    //Definicion de las reglas del formulario
    this.form = this.fb.group({
      Nombre_Personal: ['', [Validators.required, Validators.maxLength(100), Validators.pattern(/^[a-zA-Z\s]*$/)]],
      Apellido_Personal: ['', [Validators.required, Validators.maxLength(100), Validators.pattern(/^[a-zA-Z\s]*$/)]],
      Telefono: ['', [Validators.required, Validators.maxLength(10),Validators.pattern(/^\d+$/)]],
      Correo: ['', [Validators.required, Validators.email, Validators.maxLength(100)]],
      Nacionalidad: ['', [Validators.required, Validators.maxLength(100), Validators.pattern(/^[a-zA-Z\s]*$/)]],
      CURP: ['', [Validators.required, Validators.maxLength(18),]],
      RFC: ['', [Validators.required, Validators.maxLength(18),]],
      CP: ['', [Validators.required, Validators.maxLength(5),Validators.pattern(/^\d+$/)]],
      Calle: ['', [Validators.required, Validators.maxLength(100)]],
      Colonia: ['', [Validators.required, Validators.maxLength(100)]],
      NumeroIn: ['', [Validators.required, Validators.maxLength(100),Validators.pattern(/^\d+$/)]],
      NumeroEx: ['', [Validators.required, Validators.maxLength(100),Validators.pattern(/^\d+$/)]],
      Estado: ['', [Validators.required, Validators.maxLength(100), Validators.pattern(/^[a-zA-Z\s]*$/)]],
      Municipio: ['', [Validators.required, Validators.maxLength(100), Validators.pattern(/^[a-zA-Z\s]*$/)]],
    })

    //Methodo que genera la fecha actual
    this.fechaYHora = new Date();

  }
  //Funcion que se ejecuta al iniciar(vacia)
  ngOnInit(): void {
    
  }
  //Funcion que almacena y envia el nuevo registro a la DB
  addPersonal(){
    if(this.form.invalid){
      return;
    }
      const persona: PersonalData = {
        Nombre_Personal: this.form.value.Nombre_Personal,
        Apellido_Personal:this.form.value.Apellido_Personal ,
        Telefono: this.form.value.Telefono,
        Correo: this.form.value.Correo,
        Nacionalidad: this.form.value.Nacionalidad,
        CURP: this.form.value.CURP,
        RFC: this.form.value.RFC,
        CP: this.form.value.CP,
        Calle: this.form.value.Calle ,
        Colonia: this.form.value.Colonia,
        NumeroIn: this.form.value.NumeroIn ,
        NumeroEx: this.form.value.NumeroEx,
        Estado: this.form.value.Estado,
        Municipio: this.form.value.Municipio ,
      };
      this._personalService.postPersonal(persona).subscribe(data =>{
        this.mensajeExito('Creado con exito');
      } );
    
  }

  //Mensaje de confirmacion de registro
  mensajeExito(operacion: string) {
    this._snackBar.open(`${operacion}`, '', {
      duration: 2000
    });
  }


}
