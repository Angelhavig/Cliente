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

  send(id: number){
    this._emailService.getEmail(id).subscribe((data) => {
      this.emailCont = data;
      console.log(this.emailCont)
  })
  
}

sendEmails() {
  const recipients = [
    { email: this.emailCont[0].EmailP, url: this.getUniqueUrl(this.emailCont.emailP) },
    { email: this.emailCont[0].Email_T1, url: this.getUniqueUrl(this.emailCont.email_T1) },
    { email: this.emailCont[0].Email_T2, url: this.getUniqueUrl(this.emailCont.email_T2) },
    { email: this.emailCont[0].Email_Admin, url: this.getUniqueUrl(this.emailCont.emailAdmin) }
  ];

  const subject = '¡Bienvenido a nuestro sistema!';

  recipients.forEach(recipient => {
    const body = `Hola, bienvenido a nuestro sistema. Por favor, <a href="${recipient.url}">inicie sesión</a> para comenzar.`;
    
    this._emailService.sendEmail(recipient.email, subject, body).subscribe(
      response => console.log(response),
      error => console.error(error)
    );
  });
}
getUniqueUrl(email: string): string {
  // Define aquí tu lógica para generar URLs únicas basadas en la dirección de correo electrónico
  // Por ahora, he dejado un ejemplo simple
  const uniqueUrls = new Map<string, string>([
    ['usuario1@example.com', 'http://localhost:4200/Vista/Usuario'],
    ['usuario2@example.com', 'http://url_de_tu_sistema/login/Testigo1'],
    ['usuario1@example.com', 'http://localhost:4200/Vista/Testigo1'],
    ['usuario2@example.com', 'http://url_de_tu_sistema/login/Admin'],
    // Agrega más usuarios y URLs únicas aquí
  ]);

  return uniqueUrls.get(email) || 'http://localhost:4200/Vista'; // URL por defecto si no se encuentra una URL única para el usuario
}

}
