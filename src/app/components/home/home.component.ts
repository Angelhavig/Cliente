import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Blogs } from 'src/app/interfaces/blogs';
import { AuthService } from 'src/app/services/auth.service';
import { BlogsService } from 'src/app/services/blogs.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  showFiller = false;
  fecha: string;
  hora: string;
  
  constructor(private _blogService: BlogsService, private fb: FormBuilder, private _snackBar: MatSnackBar, private _authService: AuthService, private router: Router){
    this.fecha = '';
    this.hora = '';

  }
  ngOnInit(): void {

    this.mostrarFechaHora();
    // Actualiza la fecha y la hora cada segundo
    setInterval(() => {
      this.mostrarFechaHora();
    }, 1000);
    
  } 

  logout() {
    this._authService.logOut().then(() => {
      // Manejar la redirección o cualquier otra acción después de cerrar sesión
    }).catch(error => {
      console.error('Error al intentar cerrar sesión:', error);
      // Manejar el error si es necesario
    });
  }

  mostrarFechaHora(): void {
    const fechaHora = new Date();
    this.fecha = fechaHora.toLocaleDateString();
    this.hora = fechaHora.toLocaleTimeString();
  }

}
