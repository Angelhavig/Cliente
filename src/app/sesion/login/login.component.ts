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
      try {
        this._authService.logInWithEmailAndPassword(email, password);
        this.mensajeExito('exitosa');
        this.router.navigate(['/dashboard-admin']);
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
