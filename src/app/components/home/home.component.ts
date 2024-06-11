import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  //Declaracion de variables
  showFiller = false;
  fechaYHora: Date;

  constructor(private _authService: AuthService) {
    //Methodo que genera la fecha actual
    this.fechaYHora = new Date();
  }

  //Funcion que se ejecuta la iniciar
  ngOnInit(): void {}

  //Funcion que cierra la sesion
  logout() {
    this._authService
      .logOut()
      .then(() => {})
      .catch((error) => {
        console.error('Error al intentar cerrar sesión:', error);
      });
  }
}
