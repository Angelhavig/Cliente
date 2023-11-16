import { Component, ComponentFactoryResolver, Type } from '@angular/core';
import { LoginComponent } from 'src/app/sesion/login/login.component';
import { SignUpComponent } from 'src/app/sesion/sign-up/sign-up.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  componenteActual: Type<any> | null = null;

  constructor(private resolver: ComponentFactoryResolver) {}

  cargarComponente(opcion: 'uno' | 'dos'): void {
    this.componenteActual = opcion === 'uno' ? LoginComponent : SignUpComponent;
  }
}
