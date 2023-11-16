import { Component, ComponentFactoryResolver, Type } from '@angular/core';
import { BlogsVisitanteComponent } from '../Contenido/blogs-visitante/blogs-visitante.component';
import { EmpresasVisitanteComponent } from '../Contenido/empresas-visitante/empresas-visitante.component';

@Component({
  selector: 'app-servicios-visitante',
  templateUrl: './servicios-visitante.component.html',
  styleUrls: ['./servicios-visitante.component.css']
})
export class ServiciosVisitanteComponent {
  componenteActual: Type<any> | null = null;

  constructor(private resolver: ComponentFactoryResolver) {}

  cargarComponente(opcion: 'uno' | 'dos'): void {
    this.componenteActual = opcion === 'uno' ? BlogsVisitanteComponent : EmpresasVisitanteComponent ;
  }


}
