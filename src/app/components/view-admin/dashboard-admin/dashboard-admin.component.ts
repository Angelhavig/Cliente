import { Component, ComponentFactoryResolver, Type } from '@angular/core';
import { BlogsAdminComponent } from '../blogs-admin/blogs-admin.component';
import { EmpresasAdminComponent } from '../empresas-admin/empresas-admin.component';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent {
  componenteActual: Type<any> | null = null;

  constructor(private resolver: ComponentFactoryResolver) {}

  cargarComponente(opcion: 'uno' | 'dos'): void {
    this.componenteActual = opcion === 'uno' ? BlogsAdminComponent : EmpresasAdminComponent ;
  }
}
