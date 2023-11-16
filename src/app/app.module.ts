import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';


//materials

import { MatCardModule } from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';

import { MenuComponent } from './components/menu/menu.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule} from '@angular/material/form-field';
import { CompaniesComponent } from './components/companies/companies.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistrosComponent } from './components/registros/registros.component';

import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { LoginComponent } from './sesion/login/login.component';
import { SignUpComponent } from './sesion/sign-up/sign-up.component';
import { BlogsAdminComponent } from './dashboard/blogs-admin/blogs-admin.component';
import { EmpresasAdminComponent } from './dashboard/empresas-admin/empresas-admin.component';
import { ServiciosVisitanteComponent } from './components/Visitante/servicios-visitante/servicios-visitante.component';
import { BlogsVisitanteComponent } from './components/Visitante/Contenido/blogs-visitante/blogs-visitante.component';
import { EmpresasVisitanteComponent } from './components/Visitante/Contenido/empresas-visitante/empresas-visitante.component';
import { AboutVisitanteComponent } from './components/Visitante/about-visitante/about-visitante.component';
import { ContactVisitanteComponent } from './components/Visitante/contact-visitante/contact-visitante.component';
import { BlogVisitanteComponent } from './components/Visitante/blog-visitante/blog-visitante.component';
import { EmpresaVisitanteComponent } from './components/Visitante/empresa-visitante/empresa-visitante.component';
import { HomeVisitanteComponent } from './components/Visitante/home-visitante/home-visitante.component';
import { DashboardAdminComponent } from './components/view-admin/dashboard-admin/dashboard-admin.component';
import { ViewBlogAdminComponent } from './components/view-admin/view-blog-admin/view-blog-admin.component';
import { ViewEmpresaAdminComponent } from './components/view-admin/view-empresa-admin/view-empresa-admin.component';
import { AddBlogAdminComponent } from './components/view-admin/add-blog-admin/add-blog-admin.component';
import { AddEmpresaAdminComponent } from './components/view-admin/add-empresa-admin/add-empresa-admin.component';
import { EditBlogAdminComponent } from './components/view-admin/edit-blog-admin/edit-blog-admin.component';
import { EditEmpresaAdminComponent } from './components/view-admin/edit-empresa-admin/edit-empresa-admin.component';


@NgModule({
  declarations: [
    AppComponent,
    BlogsComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    MenuComponent,
    CompaniesComponent,
    RegistrosComponent,
    LoginComponent,
    SignUpComponent,
    BlogsAdminComponent,
    EmpresasAdminComponent,
    ServiciosVisitanteComponent,
    BlogsVisitanteComponent,
    EmpresasVisitanteComponent,
    AboutVisitanteComponent,
    ContactVisitanteComponent,
    BlogVisitanteComponent,
    EmpresaVisitanteComponent,
    HomeVisitanteComponent,
    DashboardAdminComponent,
    ViewBlogAdminComponent,
    ViewEmpresaAdminComponent,
    AddBlogAdminComponent,
    AddEmpresaAdminComponent,
    EditBlogAdminComponent,
    EditEmpresaAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatDialogModule,
    MatFormFieldModule,
    provideFirebaseApp(()=>initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    AngularFireModule.initializeApp(environment.firebase),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
