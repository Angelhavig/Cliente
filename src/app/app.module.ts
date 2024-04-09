import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';

//materials

import { MatCardModule } from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';





import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { LoginComponent } from './components/login/login.component';

import { ErrorComponent } from './components/error/error.component';
import { PersonalComponent } from './components/personal/personal.component';
import { AddpersonalComponent } from './components/addpersonal/addpersonal.component';
import { ContratosComponent } from './components/contratos/contratos.component';
import { AddcontratosComponent } from './components/addcontratos/addcontratos.component';
import { AjustesComponent } from './components/ajustes/ajustes.component';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import {MatTooltipModule} from '@angular/material/tooltip';
import { InformationComponent } from './components/information/information.component';
import { EditpersonalComponent } from './components/editpersonal/editpersonal.component';
import { DetallesconComponent } from './components/detallescon/detallescon.component';
import { EditcontratosComponent } from './components/editcontratos/editcontratos.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ErrorComponent,
    PersonalComponent,
    AddpersonalComponent,
    ContratosComponent,
    AddcontratosComponent,
    AjustesComponent,
    InformationComponent,
    EditpersonalComponent,
    DetallesconComponent,
    EditcontratosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatToolbarModule,
    MatTooltipModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatDialogModule,
    MatFormFieldModule,
    MatGridListModule,
    MatSidenavModule,
    MatIconModule,
    MatSortModule,
    MatPaginatorModule,
    MatTableModule,
    MatInputModule,
    provideFirebaseApp(()=>initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    AngularFireModule.initializeApp(environment.firebase),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
