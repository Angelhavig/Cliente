import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import html2canvas from 'html2canvas';
import * as jsPDF from 'jspdf';
import { ContratosService } from 'src/app/services/contratos.service';




@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.css']
})
export class VistaComponent implements OnInit{

  public InformacionContrato : any;
  id:number;
  id_secundario: string;
  
  constructor( private _route: ActivatedRoute, private _contratoService: ContratosService ,private router: Router){
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as { id: number };
    let finalid = state?.id;
    this.id = finalid;
    this.id_secundario = '';
  }

    ngOnInit(): void {
      const idFromRoute = this._route.snapshot.paramMap.get('id');
      console.log(idFromRoute);
      if(this.id !== null){
        this.getInfo(this.id);
      } 
      if(idFromRoute !== null){
        this.id_secundario = idFromRoute;
        console.log(this.id_secundario)
        const id_Contrato = +this.id_secundario;
        this.getInfo(id_Contrato);
      }
      else {
        console.error('id is undefined or null')
      }
    }
 
 getInfo(id:number){
  if (id !== null) {
    this._contratoService.InformacionContratos(id).subscribe((data) => {
      this.InformacionContrato = data;

      console.log(this.InformacionContrato)
    }, error => {
      console.error('Error al obtener la información del perfil:', error);
    });
  } else {
    console.error('Error al obtener el correo.');
  }
 }

 imprimir() {
  const elementoPdf = document.getElementById('pdf');

  if (elementoPdf !== null) {
    html2canvas(elementoPdf).then((canvas: { toDataURL: (arg0: string) => any; }) => {
      const imgData = canvas.toDataURL('image/png');

      const pdf = new jsPDF.default();
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('Contrato laboral.pdf');
    });
  } else {
    console.error("No se encontró ningún elemento con el ID 'pdf'.");
  }
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  firmar() {
    const tokenRuta = this._route.snapshot.paramMap.get('token');
    const perfilRuta = this._route.snapshot.paramMap.get('perfil');
    const idFromRoute = this._route.snapshot.paramMap.get('id');


    if(perfilRuta == 'Solicitante'){
      if(idFromRoute !== null){
        this.id_secundario = idFromRoute;
        console.log(this.id_secundario)
        const id_Contrato = +this.id_secundario;
        this._contratoService.putFUsuario(id_Contrato, tokenRuta).subscribe((data) => {
        }, error => {
          console.error('Error al obtener la información del perfil:', error);
        });
      }
      else {
        console.error('id is undefined or null')
      }
    }
    if(perfilRuta == 'Testigo-Principal'){
      if(idFromRoute !== null){
        this.id_secundario = idFromRoute;
        console.log(this.id_secundario)
        const id_Contrato = +this.id_secundario;
        this._contratoService.putFTestigo1(id_Contrato, tokenRuta).subscribe((data) => {
        }, error => {
          console.error('Error al obtener la información del perfil:', error);
        });
      }
      else {
        console.error('id is undefined or null')
      }
    }
    if(perfilRuta == 'Testigo-Secundario'){
      if(idFromRoute !== null){
        this.id_secundario = idFromRoute;
        console.log(this.id_secundario)
        const id_Contrato = +this.id_secundario;
        this._contratoService.putFTestigo2(id_Contrato, tokenRuta).subscribe((data) => {
        }, error => {
          console.error('Error al obtener la información del perfil:', error);
        });
      }
      else {
        console.error('id is undefined or null')
      }

    }
    if(perfilRuta == 'Academia'){
      if(idFromRoute !== null){
        this.id_secundario = idFromRoute;
        console.log(this.id_secundario)
        const id_Contrato = +this.id_secundario;
        this._contratoService.(id_Contrato, tokenRuta).subscribe((data) => {
        }, error => {
          console.error('Error al obtener la información del perfil:', error);
        });
      }
      else {
        console.error('id is undefined or null')
      }

    }
    alert(tokenRuta)
    this.closeModal();
  }
}
