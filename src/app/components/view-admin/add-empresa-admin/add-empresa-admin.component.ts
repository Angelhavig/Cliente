import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Empresa } from 'src/app/interfaces/empresa';
import { EmpresaService } from 'src/app/services/empresa.service';



@Component({
  selector: 'app-add-empresa-admin',
  templateUrl: './add-empresa-admin.component.html',
  styleUrls: ['./add-empresa-admin.component.css']
})
export class AddEmpresaAdminComponent implements OnInit{
  form: FormGroup;

  constructor(
    private fb: FormBuilder, private _snackBar: MatSnackBar,
    public _dialogRef: MatDialogRef<AddEmpresaAdminComponent>,
    private _empresaService: EmpresaService
  ){
    this.form = this.fb.group({
      Titulo_Empresa: ['', Validators.required],
      Descripcion_Empresa: ['', Validators.required],
      Contacto_Empresa: ['', Validators.required],
      Correo_Empresa: ['', Validators.required],
      Pais_Empresa: ['', Validators.required],
      Sector_Empresa: ['', Validators.required],
      
    });

  }
  ngOnInit(): void {
    
  }
  cancelar(){
    this._dialogRef.close();
  }

  addEmpresa() {
    if (this.form.invalid) {
      return;
    }
    const empresa: Empresa = {
      Titulo_Empresa: this.form.value.Titulo_Empresa,
      Descripcion_Empresa:this.form.value.Descripcion_Empresa,
      Contacto_Empresa: this.form.value.Contacto_Empresa,
      Correo_Empresa: this.form.value.Correo_Empresa,
      Pais_Empresa: this.form.value.Pais_Empresa,
      Sector_Empresa: this.form.value.Sector_Empresa,
    };
    console.log(empresa);
    this._empresaService.postEmpresa(empresa).subscribe(data => {
      this.mensajeExito('agregada');
      this.form.reset(); // Resetea el formulario para limpiar los campos
      this._dialogRef.close();
    });
  }

  mensajeExito(operacion: string) {
    this._snackBar.open(`La entrada fue ${operacion} con éxito`, '', {
      duration: 2000
    });
  }
}
