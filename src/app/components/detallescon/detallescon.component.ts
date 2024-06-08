import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmailContratos } from 'src/app/interfaces/correo';
import { ContratosService } from 'src/app/services/contratos.service';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-detallescon',
  templateUrl: './detallescon.component.html',
  styleUrls: ['./detallescon.component.css']
})
export class DetallesconComponent implements OnInit{

  public contrato: any;
  id: string;
  fechaYHora: Date;
  
  public emailCont: string[] = [];


  constructor( private _route: ActivatedRoute,private _contratoService: ContratosService , private router: Router, private _emailService: EmailService ){
    this.id = '';
    this.fechaYHora = new Date();

  }

  ngOnInit(): void {
    const idFromRoute = this._route.snapshot.paramMap.get('id');
  if (idFromRoute !== null) {
    this.id = idFromRoute;
    const id_Contrato = +this.id;
    this.getInfo(id_Contrato);
    this.send(id_Contrato);
  } else {
    // Handle the case where 'id' parameter is null
    // For example, you might want to handle it differently or show an error message
    console.error("'id' parameter is null.");
  }
  }

  getInfo(id: number) {
    if (id !== null) {
      this._contratoService.getInfoContrato(id).subscribe((data) => {
        this.contrato = data;
      }, error => {
        console.error('Error al obtener la información del perfil:', error);
      });
    } else {
      console.error('Error al obtener el correo.');
    }
  }


  perfil(id?: number){
    this.router.navigate(['Informacion',id]);
  }

  send(id: number) {
    this._emailService.getEmail(id).subscribe((data: EmailContratos) => {
      this.emailCont = data.emails;
      console.log('Emails obtenidos:', this.emailCont);
    }, error => {
      console.error('Error al obtener los correos electrónicos:', error);
    });
  }


async sendEmails() {

  const emailsAndBodies = [
    { to: '', body: 'Binevenido al Personal' },
    { to:'', body: 'Gracias por ser el Testigo 1' },
    { to: '', body: 'Gracias Por ser el textigo 2' },
    { to: '', body: 'Gracias por ser el administrador' }
  ];

  const subject = '¡Nuevo Contratos!';

  const emailPromises = emailsAndBodies.map(({ to, body }) => 
    this._emailService.sendEmail(to, subject, body).toPromise()
  );

  try {
    const responses = await Promise.all(emailPromises);
    responses.forEach(response => console.log('Correo electrónico enviado:', response));
  } catch (error) {
    console.error('Error al enviar uno o más correos electrónicos:', error);
  }
}


}
