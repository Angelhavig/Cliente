import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Empresa } from 'src/app/interfaces/empresa';
import { EmpresaService } from 'src/app/services/empresa.service';

@Component({
  selector: 'app-edit-empresa-admin',
  templateUrl: './edit-empresa-admin.component.html',
  styleUrls: ['./edit-empresa-admin.component.css']
})
export class EditEmpresaAdminComponent implements OnInit{
  form: FormGroup;
  id: number | undefined;

  constructor(
    private fb: FormBuilder, private _snackBar: MatSnackBar,
    public _dialogRef: MatDialogRef<EditEmpresaAdminComponent>,
    private _empresaService: EmpresaService,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ){
    this.form = this.fb.group({
      Titulo_Empresa: ['', Validators.required],
      Descripcion_Empresa: ['', Validators.required],
      Contacto_Empresa: ['', Validators.required],
      Correo_Empresa: ['', Validators.required],
      Pais_Empresa: ['', Validators.required],
      Sector_Empresa: ['', Validators.required],
      
    });
    this.id = data.id;
    console.log(this.id)
  }
  ngOnInit(): void {
    this.edit(this.id);
  }

  edit(id: number | undefined){
    if(id !== undefined){
      this.getEmpresa(id);
    }

  }

  getEmpresa(id: number){
    this._empresaService.getEmpresaE(id).subscribe(data=>{
      this.form.setValue({
        Titulo_Empresa: data.Titulo_Empresa,
        Descripcion_Empresa: data.Descripcion_Empresa,
        Contacto_Empresa: data.Contacto_Empresa,
        Correo_Empresa: data.Correo_Empresa,
        Pais_Empresa: data.Pais_Empresa,
        Sector_Empresa: data.Sector_Empresa
      })
    })

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
    if(this.id == undefined){

    }else{
      this._empresaService.putEmpresa(this.id, empresa).subscribe(data => {
        this.mensajeExito('agregada');
        this.form.reset(); // Resetea el formulario para limpiar los campos
        this._dialogRef.close();
      });
    }
  }

  mensajeExito(operacion: string) {
    this._snackBar.open(`La entrada fue ${operacion} con éxito`, '', {
      duration: 2000
    });
  }
}
