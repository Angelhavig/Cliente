import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './guard/auth.guard';
import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/error/error.component';

const routes: Routes = [
  //Ruta por defecto
  { path: '', redirectTo: '/Login', pathMatch: 'full' },
  //Rutas
  { path: 'Home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'Login', component: LoginComponent },
  { path: 'Error', component: ErrorComponent},
];

//  path: 'dashboard-admin', component: DashboardAdminComponent, canActivate: [AuthGuard] 
// path: 'blog-admin/:id/:titulo_Blog', component: ViewBlogAdminComponent, canActivate: [AuthGuard] 


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
