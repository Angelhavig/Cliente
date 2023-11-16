import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { AuthGuard } from './guard/auth.guard';
import { ServiciosVisitanteComponent } from './components/Visitante/servicios-visitante/servicios-visitante.component';
import { BlogVisitanteComponent } from './components/Visitante/blog-visitante/blog-visitante.component';
import { AboutVisitanteComponent } from './components/Visitante/about-visitante/about-visitante.component';
import { ContactVisitanteComponent } from './components/Visitante/contact-visitante/contact-visitante.component';
import { EmpresaVisitanteComponent } from './components/Visitante/empresa-visitante/empresa-visitante.component';
import { DashboardAdminComponent } from './components/view-admin/dashboard-admin/dashboard-admin.component';
import { ViewBlogAdminComponent } from './components/view-admin/view-blog-admin/view-blog-admin.component';
import { ViewEmpresaAdminComponent } from './components/view-admin/view-empresa-admin/view-empresa-admin.component';

const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  //Rutas visitantes
  { path: 'Home', component: HomeComponent },
  { path: 'Servicios', component: ServiciosVisitanteComponent },
  { path: 'Blog/:id/:titulo_Blog', component: BlogVisitanteComponent},
  { path: 'Empresa/:id/:titulo_Empresa', component: EmpresaVisitanteComponent },
  { path: 'Login', component: AboutComponent },
  { path: 'About', component: AboutVisitanteComponent},
  { path: 'Contact-info', component: ContactVisitanteComponent },
  //Rutas admin
  { path: 'dashboard-admin', component: DashboardAdminComponent, canActivate: [AuthGuard]  },
  { path: 'blog-admin/:id/:titulo_Blog', component: ViewBlogAdminComponent, canActivate: [AuthGuard]  },
  { path: 'companies-admin/:id/:titulo_Empresa', component: ViewEmpresaAdminComponent, canActivate: [AuthGuard]  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
