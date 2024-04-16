import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Administracion } from 'src/app/interfaces/contrato';
import { ContratosService } from 'src/app/services/contratos.service';

@Component({
  selector: 'app-ajustes',
  templateUrl: './ajustes.component.html',
  styleUrls: ['./ajustes.component.css']
})
export class AjustesComponent implements OnInit{

  form: FormGroup;
  public admin: any;
  fechaYHora: Date;

  
  constructor(
    private fb: FormBuilder, private _snackBar: MatSnackBar,
    private _contratoService: ContratosService,
    private _route: ActivatedRoute,
  ){

    this.form = this.fb.group({
      Puesto: ['', [Validators.required, Validators.maxLength(100)]],
      Nombre: ['', [Validators.required, Validators.maxLength(100)]],
      Apellido: ['', [Validators.required, Validators.maxLength(100)]],
      Correo: ['', [Validators.required, Validators.maxLength(100)]],
  });
  this.fechaYHora = new Date();

  }

  ngOnInit(): void {
    
  }

  actualizar() {
    const puesto = this.form.get('Puesto')?.value;
    const nombre = this.form.get('Nombre')?.value;
    const apellido = this.form.get('Apellido')?.value;
    const correo = this.form.get('Correo')?.value;
  
    if (!puesto || !nombre || !apellido || !correo) {
      this.mensajeVacio('Por favor, complete todos los campos');
      return;
    }
  
    const admin: Administracion = {
      Nombre: nombre,
      Apellido: apellido,
      Correo: correo,
    };
  
    this._contratoService.actualizarPersonal(puesto, admin).subscribe({
      next: () => {
        this.mensajeVacio('Actualización exitosa');
      },
      error: (err) => {
        console.error('Error al actualizar:', err);
        this.mensajeVacio('Se produjo un error al actualizar los datos');
      }
    });
  }
  
  


  seleccionarPuesto(event: any) {
    const puesto = event.target.value;
    if (puesto === 'direccion') {
        this._contratoService.getAdmin(puesto).subscribe((data) => {
          this.admin = data;
            this.form.patchValue({
                Nombre: this.admin[0].Nombre,
                Apellido: this.admin[0].Apellido,
                Correo: this.admin[0].Correo
            });
            this.mensajeVacio('Datos de la direccion encontrados con exito');
        });
    } else if (puesto === 'contraloria') {
      this._contratoService.getAdmin(puesto).subscribe((data) => {
        this.admin = data;
          this.form.patchValue({
            Nombre: this.admin[0].Nombre,
            Apellido: this.admin[0].Apellido,
            Correo: this.admin[0].Correo
          });
          this.mensajeVacio('Datos de la contraloria encontrados con exito');
      });
    } else if (puesto === 'tesorero') {
      this._contratoService.getAdmin(puesto).subscribe((data) => {
        this.admin = data;
          this.form.patchValue({
            Nombre: this.admin[0].Nombre,
            Apellido: this.admin[0].Apellido,
            Correo: this.admin[0].Correo
          });
          this.mensajeVacio('Datos del tesorero encontrados con exito');
      });
    }
}


mensajeVacio(operacion: string) {
  this._snackBar.open(`${operacion}`,'', {
      duration: 2000
  });
}


}
