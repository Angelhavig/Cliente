import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Personal, PersonalData } from 'src/app/interfaces/personal';
import { PersonalService } from 'src/app/services/personal.service';

@Component({
  selector: 'app-addpersonal',
  templateUrl: './addpersonal.component.html',
  styleUrls: ['./addpersonal.component.css']
})
export class AddpersonalComponent implements OnInit{

  form: FormGroup;

  constructor(
    private fb: FormBuilder, private _snackBar: MatSnackBar,
    private _personalService: PersonalService
  ){
    this.form = this.fb.group({
      Nombre_Personal: ['', [Validators.required, Validators.maxLength(100)]],
      Apellido_Personal: ['', [Validators.required, Validators.maxLength(100)]],
      Telefono: ['', [Validators.required, Validators.maxLength(10)]],
      Correo: ['', [Validators.required, Validators.email, Validators.maxLength(100)]],
      Nacionalidad: ['', [Validators.required, Validators.maxLength(100)]],
      CURP: ['', [Validators.required, Validators.maxLength(18),]],
      RFC: ['', [Validators.required, Validators.maxLength(18),]],
      CP: ['', [Validators.required, Validators.maxLength(5)]],
      Calle: ['', [Validators.required, Validators.maxLength(100)]],
      Colonia: ['', [Validators.required, Validators.maxLength(100)]],
      NumeroIn: ['', [Validators.required, Validators.maxLength(100)]],
      NumeroEx: ['', [Validators.required, Validators.maxLength(100)]],
      Estado: ['', [Validators.required, Validators.maxLength(100)]],
      Municipio: ['', [Validators.required, Validators.maxLength(100)]],
    })
  }

  ngOnInit(): void {
    
  }

  cancelar(){}

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


  mensajeExito(operacion: string) {
    this._snackBar.open(`${operacion}`, '', {
      duration: 2000
    });
  }


}
