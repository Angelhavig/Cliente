import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private _authService: AuthService, private _snackBar: MatSnackBar, private router: Router){
    this.loginForm = this.fb.group({
      usermail: ['', [Validators.required, Validators.email, Validators.maxLength(60)]],
      userpassword: ['', Validators.required]
    });
  }
    ngOnInit(): void {
    
    }

    login(){
      const email = this.loginForm.value.usermail;
      const password = this.loginForm.value.userpassword;
        this._authService.logInWithEmailAndPassword(email, password).then(() =>{
          this.mensaje('Exito');
        }). catch (error =>{
        // Manejo de la excepción
        
        this.mensaje('error', error.message);
    
        // Puedes agregar aquí código adicional para manejar el error, como mostrar un mensaje de error al usuario.
    });
  
    }

    mensaje(tipo: string, mensaje?: string) {
      let mensajeMostrar: string;
      if (tipo === 'exitosa') {
        mensajeMostrar = 'La entrada fue exitosa';
      } else {
        mensajeMostrar = 'Error al intentar iniciar sesión: ' + mensaje;
      }
      this._snackBar.open(mensajeMostrar, '', {
        duration: 2000
      });
    }



}
