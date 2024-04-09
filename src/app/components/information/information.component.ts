import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Personal } from 'src/app/interfaces/personal';
import { PersonalService } from 'src/app/services/personal.service';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit{

  public personal: any;
  id: string;


  
  
  constructor( private _route: ActivatedRoute,private _personalService: PersonalService){
    this.id = '';
  }



  ngOnInit(): void {
    const idFromRoute = this._route.snapshot.paramMap.get('id');
  if (idFromRoute !== null) {
    this.id = idFromRoute;
    const id_Personal = +this.id;
    this.getInfo(id_Personal);
  } else {
    // Handle the case where 'id' parameter is null
    // For example, you might want to handle it differently or show an error message
    console.error("'id' parameter is null.");
  }
  }
  



  getInfo(id: number) {
    if (id !== null) {
      this._personalService.getInfoPerfil(id).subscribe((data) => {
        this.personal = data;
        console.log('Datos recibidos', data)
      }, error => {
        console.error('Error al obtener la información del perfil:', error);
      });
    } else {
      console.error('Error al obtener el correo.');
    }
  }


  }
