import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonalService } from 'src/app/services/personal.service';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit{

  //Declaracion de variables
  public personal: any;
  id: string;
  fechaYHora: Date;

  constructor( private _route: ActivatedRoute,private _personalService: PersonalService){
    //Asignacion de un valor a la variable principal
    this.id = '';

    //Methodo que genera la fecha actual
    this.fechaYHora = new Date();

  }

  //Funcion que se ejecuta al inicio y obtiene el id de la ruta
  ngOnInit(): void {
    const idFromRoute = this._route.snapshot.paramMap.get('id');
    if (idFromRoute !== null) {
      this.id = idFromRoute;
      const id_Personal = +this.id;
      this.getInfo(id_Personal);
    } else {
      alert('error')
    }
  }
  
  //Funcion que obtiene y asigna los valores
  getInfo(id: number) {
    if (id !== null) {
      this._personalService.getInfoPerfil(id).subscribe((data) => {
        this.personal = data;
      }, error => {
        console.error('Error al obtener la información del perfil:', error);
      });
    } else {
      console.error('Error al obtener el correo.');
    }
  }


  }
