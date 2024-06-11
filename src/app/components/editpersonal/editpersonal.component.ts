import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { PersonalData } from 'src/app/interfaces/personal';
import { PersonalService } from 'src/app/services/personal.service';

@Component({
  selector: 'app-editpersonal',
  templateUrl: './editpersonal.component.html',
  styleUrls: ['./editpersonal.component.css']
})
export class EditpersonalComponent implements OnInit{

  //Declaracion de variables
  form: FormGroup;
  id: string;
  public personal: any;
  fechaYHora: Date;



  constructor(
    private fb: FormBuilder, private _snackBar: MatSnackBar,
    private _personalService: PersonalService,
    private _route: ActivatedRoute
  ){

    //Asignacion de reglas el formulario
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

    //Asignacion de valores a la variable principal
    this.id = '';

    //Methodo que genera la fecha actual
    this.fechaYHora = new Date();

  }

  //Funcion que se ejecuta al inicio tomando el id de la ruta y llamado de las funciones principales
  ngOnInit(): void {
    const idFromRoute = this._route.snapshot.paramMap.get('id');
    if (idFromRoute !== null) {
      this.id = idFromRoute;
      const id_Personal = +this.id;
      this.getInfo(id_Personal);
    } else {
      console.error("'id' parameter is null.");
    }
  }

  //Funcion que obtiene y asigna valores al formulario de la DB
  getInfo(id: number) {
    if (id !== null) {
      this._personalService.getInfoE(id).subscribe((data) => {
        this.personal = data;
        console.log(this.personal)
        this.form.setValue({
          Nombre_Personal: this.personal[0].Nombre_Personal,
          Apellido_Personal: this.personal[0].Apellido_Personal,
          Telefono: this.personal[0].Telefono,
          Correo: this.personal[0].Correo,
          Nacionalidad: this.personal[0].Nacionalidad,
          CURP: this.personal[0].CURP,
          RFC: this.personal[0].RFC,
          CP: this.personal[0].CP,
          Calle: this.personal[0].Calle,
          Colonia: this.personal[0].Colonia,
          NumeroIn: this.personal[0].NumeroIn,
          NumeroEx:  this.personal[0].NumeroEx,
          Estado:  this.personal[0].Estado,
          Municipio: this.personal[0].Municipio
        });
      }, error => {
        console.error('Error al obtener la información del perfil:', error);
      });
    } else {
      console.error('Error al obtener el correo.');
    }
  }

  //Funcion que actualiza los datos de la DB
  addPersonal(){
    var id_Personal = Number(this.id);
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
      this._personalService.editPersonal(id_Personal, persona).subscribe(data =>{
        this.mensajeExito('Creado con exito');
      } );
    
  }

  //Funcion que genera un mensaje de exito
  mensajeExito(operacion: string) {
    this._snackBar.open(`${operacion}`, '', {
      duration: 2000
    });
  }


}
