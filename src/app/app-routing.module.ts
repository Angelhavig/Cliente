import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './guard/auth.guard';
import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/error/error.component';
import { PersonalComponent } from './components/personal/personal.component';
import { AddpersonalComponent } from './components/addpersonal/addpersonal.component';
import { ContratosComponent } from './components/contratos/contratos.component';
import { AddcontratosComponent } from './components/addcontratos/addcontratos.component';
import { AjustesComponent } from './components/ajustes/ajustes.component';
import { InformationComponent } from './components/information/information.component';

const routes: Routes = [
  //Ruta por defecto
  { path: '', redirectTo: '/Login', pathMatch: 'full' },
  //Rutas
  { path: 'Home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'Personal', component: PersonalComponent, canActivate: [AuthGuard] },
  { path: 'Agregar-Personal', component: AddpersonalComponent, canActivate: [AuthGuard] },
  { path: 'Contratos', component: ContratosComponent, canActivate: [AuthGuard] },
  { path: 'Generar-Contrato', component: AddcontratosComponent, canActivate: [AuthGuard] },
  { path: 'Ajustes', component: AjustesComponent, canActivate: [AuthGuard] },
  { path: 'Informacion/:id', component: InformationComponent, canActivate: [AuthGuard] },
  { path: 'Login', component: LoginComponent },
  { path: 'Error', component: ErrorComponent},
  { path: '**',  redirectTo: '/Error'},

];

//  path: 'dashboard-admin', component: DashboardAdminComponent, canActivate: [AuthGuard] 
// path: 'blog-admin/:id/:titulo_Blog', component: ViewBlogAdminComponent, canActivate: [AuthGuard] 


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
