import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  public emailCont: any;
  


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
    this._emailService.getEmail(id).subscribe((data) => {
      this.emailCont = data;
      console.log('Emails obtenidos:', this.emailCont);
    }, error => {
      console.error('Error al obtener los correos electrónicos:', error);
    });
  }


async sendEmails() {
  const correo_personal_contrato = this.emailCont[0].correo_personal
  const correo_testigo_1_contrato = this.emailCont[0].correo_contrato_1
  const correo_testigo_2_contrato = this.emailCont[0].correo_contrato_2
  const correo_administrador_contrato = this.emailCont[0].correo_administrativo
  

    // Método para generar un token único de 30 caracteres
    const generateToken = (length = 30) => {
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let token = '';
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        token += characters.charAt(randomIndex);
      }
      return token;
    };

    
  const emailsAndBodies = [
    { to: correo_personal_contrato, body: 'http://localhost:4200/Vista/'+ this.id+ '/'+ generateToken() +'/Solicitante' },
    { to: correo_testigo_1_contrato, body: 'http://localhost:4200/Vista/'+ this.id+ '/'+ generateToken() +'/Testigo-Principal' },
    { to: correo_testigo_2_contrato, body: 'http://localhost:4200/Vista/'+ this.id+ '/'+ generateToken() + '/Testigo-Secundario' },
    { to: correo_administrador_contrato, body: 'http://localhost:4200/Vista/'+ this.id+ '/'+ generateToken() +'/Academia' }
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


async sendFEmails() {
  const correo_personal_contrato = this.emailCont[0].correo_personal
  const emailsAndBodies = [
    { to: correo_personal_contrato, body: '!Felicidades tu contrato laboral fue registrado con exito' },
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
