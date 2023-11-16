import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit{

  signupForm: FormGroup;

  constructor(private fb: FormBuilder, private _authService: AuthService, private _snackBar: MatSnackBar, private router: Router){
    this.signupForm = this.fb.group({
      usermail: ['', [Validators.required, Validators.email, Validators.maxLength(60)]],
      userpassword: ['', Validators.required]
    });
  }
    ngOnInit(): void {
    
    }

    Registrar(){
      const email = this.signupForm.value.usermail;
      const password = this.signupForm.value.userpassword;
      try {
        this._authService.singUpWithEmailAndPassword(email, password);
        this.mensajeExito('exitosa');
        //this.signupForm.reset();
    } catch (error) {
        // Manejo de la excepción
        console.error('Error al intentar iniciar sesión:', error);
    
        // Puedes agregar aquí código adicional para manejar el error, como mostrar un mensaje de error al usuario.
    }
  
    }

    mensajeExito(operacion: string) {
      this._snackBar.open(`La entrada fue ${operacion}`, '', {
        duration: 2000
      });
    }
  
      mensajeError() {
        this._snackBar.open('Registro fallido', '', {
          duration: 2000
        });
        }
  



}
