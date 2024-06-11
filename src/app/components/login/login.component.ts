import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  //Declaracion de variables
  loginForm: FormGroup;


  //Asignacion de posicion del mensaje
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  

  constructor(private fb: FormBuilder, private _authService: AuthService, private _snackBar: MatSnackBar){

    //Asignacion de reglas al formulario
    this.loginForm = this.fb.group({
      usermail: ['', [Validators.required, Validators.email, Validators.maxLength(60)]],
      userpassword: ['', Validators.required]
    });

    
  }
  
  //Funcion que se ejecuta al inicio
  ngOnInit(): void {}

  //Funcion que realiza el inicio de sesion utilizando firebase
  login(){
    const email = this.loginForm.value.usermail;
    const password = this.loginForm.value.userpassword;
      this._authService.logInWithEmailAndPassword(email, password).then(() =>{
        this.mensaje('Exito');
      }). catch (error =>{
      
      this.mensaje('error');
  
  });

  }

  //Funcion que genera el mensaje
  mensaje(tipo: string, mensaje?: string) {
    let mensajeMostrar: string;
    if (tipo === 'Exito') {
      mensajeMostrar = 'Bienvenid@!!   ' + this.loginForm.value.usermail;
    } else {
      mensajeMostrar = 'Credenciales Invalidad';
    }
    this._snackBar.open(mensajeMostrar, 'Aceptar', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 2000,
      
    });
  }


  openSnackBar() {
    this._snackBar.open('Cannonball!!', 'Splash', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

}
